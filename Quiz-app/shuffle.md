# List Shuffle
다음은 배열을 임의로 섞는 것에 대한 내용입니다.  
<br>

## generate
이번 앱에는 5개의 배열을 직접 넣는 식으로 했습니다.
```js
let problems=[]
function generateProblems(){
    let problemObj={
        questionNo:"0",
        question:"병호의 성(Last name)은 무엇일까요?",
        no1:"주",
        no2:"신",
        no3:"이",
        no4:"진"
    }
    problems.push(problemObj)
}
```
함수를 생성해 배열에 넣는, 위와 같은 과정을 5번 거쳤습니다.  
<br>

## shuffle
배열의 순서를 임의로 섞기 위해서 `questions`이라는 배열을 하나 더 생성해, 기존 `problems`라는 배열에서 `Math.random`을 이용해 하나를 빼고 `question`에 넣는 것을 5번 반복해 실했하였습니다.
```js
let questions=[]
function shuffle(){
    for(let n=0;n<5;n++){
        const index=Math.floor(Math.random()*(4-n))
        questions.push(problems[index])
        problems.splice(index,1)
    }
}
```