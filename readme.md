
<details open>
<summary><b>Part I</b></summary>

      const PROXY_URL = 'https://corsproxy.io/?';
---
      const QUESTIONS_API_BASE_URL = 'https://www.algoexpert.io/api/fe/questions';

---


            [
               {
                  "id":"sign-up-form",
                  "name":"Sign-Up Form",
                  "category":"HTML"
               },
               {
                  "id":"rainbow-circles",
                  "name":"Rainbow Circles",
                  "category":"CSS"
               },
               ...
            ]


---


            <div class="category">
               <h2>HTML</h2>
               <div class="question">
                  <h3>Stopwatch</h3>
               </div>
               <div class="question">
                  <h3>Tic Tac Toe</h3>
               </div>
            </div>

</details>
<details>
<summary><b>Part II</b></summary>


      const SUBMISSIONS_API_BASE_URL = 'https://www.algoexpert.io/api/fe/submissions';
---
            [
               {
                  "questionId":"blog-post",
                  "status":"CORRECT"
               },
               {
                  "questionId":"throttle",
                  "status":"INCORRECT"
               },
               {
                  "questionId":"stopwatch",
                  "status":"PARTIALLY_CORRECT"
               },
               ...
            ]
----
            <div class="category">
               <h2>HTML</h2>
               <div class="question">
               <div class="status partially-correct"></div>
                  <h3>Stopwatch</h3>
               </div>
               <div class="question">
                  <div class="status correct"></div>
                  <h3>Tic Tac Toe</h3>
               </div>
            </div>

Not existing = 'unattempted'
</details>