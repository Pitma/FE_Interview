const PROXY_URL = 'https://corsproxy.io/?';
const QUESTIONS_API = 'https://www.algoexpert.io/api/fe/questions';
const SUBMISSIONS_API = 'https://www.algoexpert.io/api/fe/submissions';

async function fetchAndAppendQuestions() {
    const [questions, submissions] = await fetchQuestionsAndSubmissions();
    const questionsByCategory = getQuestionsByCategory(questions);
    const submissionsById = getSubmissionsById(submissions);

    const wrapper = document.getElementById('category-container');
    for (const [category, questions] of Object.entries(questionsByCategory)) {
        const categoryDiv = createCategory(category, questions, submissionsById);
        wrapper.append(categoryDiv);
    }
}

function createCategory(category, questions,submissions) {
    const categoryDiv = document.createElement('div');
    categoryDiv.classList.add('category');
    const h2 = document.createElement('h2');
    //h2.textContent = category;
    correctCount = 0;
    questions.forEach(question => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        const statusDiv = document.createElement('div');
        statusDiv.classList.add('status');
        const statusClass = submissions[question.id]?.toLowerCase()?.replace('_','-');
        if (statusClass === 'correct'){
            correctCount++;
        }
        statusDiv.classList.add(statusClass ?? 'unattempted');
        const h3 = document.createElement('h3');
        h3.textContent = question.name;
        questionDiv.append(statusDiv);
        questionDiv.append(h3);
        categoryDiv.append(questionDiv);
        
    });
    h2.textContent = `${category} - ${correctCount} / ${questions.length}`
    categoryDiv.prepend(h2);
    
    return categoryDiv;
}
async function fetchQuestionsAndSubmissions() {
    const [questionsResponse, submissionsResponse] = await Promise.all([
        fetch(PROXY_URL + QUESTIONS_API),
        fetch(PROXY_URL + SUBMISSIONS_API)
    ]);

    return await Promise.all([
        questionsResponse.json(),
        submissionsResponse.json()
    ]);
}

function getQuestionsByCategory(questions) {
    const questionsByCategory = {};
    questions.forEach(question => {
        if (questionsByCategory.hasOwnProperty(question.category)) {
            questionsByCategory[question.category].push(question);
        } else {
            questionsByCategory[question.category] = [question];
        }
    });

    return questionsByCategory
}

function getSubmissionsById(submissions){
    const submissionsById = {};
    submissions.forEach(submission => {
        submissionsById[submission.questionId] = submission.status;
    });

    return submissionsById;
}

fetchAndAppendQuestions();
