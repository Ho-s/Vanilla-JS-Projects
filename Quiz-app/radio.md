# Radio button
보기는 다음과 같이 4개로 이루어져있으며 이는 각각 `radio button`의 같은 `name`으로 들어가있습니다. 
<img src="./readmeImages/8.PNG" width="330px">  
<br>

## checked is true or false
정답을 누르고 다음 문제로 넘어가기 위해서는 아래 코드를 통해 체크된 박스가 하나라도 있어야 하게 설정하였습니다. 4개의 라디오버튼중 check가 있는지 검증 하기 위해 `for`을 사용하였으며, 반환값이 `true`일 경우에 다음으로 진행되도록 하였습니다.
```js
submit.addEventListener("click",()=>{
    for(let v=0;v<4;v++){
        if(answers[v].checked===true){ //radio button의 name은 answers
            for(let i=0;i<4;i++){
                answers[i].checked=false
                //scorebox
            }
        }
    }if(answers[0].checked===false&&answers[1].checked===false&&answers[2].checked===false&&answers[3].checked===false){
            alert("There must exist a checked box")
}
```
`for`문의 `if`문 안의 `for`문의 경우, 문제가 정상적으로 풀렸을때, 모든 라디오박스의 체크버튼이 풀리도록 설정해놓은 것입니다.  
가운데의 주석처리된 //scorebox는 아래쪽에서 설명하겠습니다.
<br>

또한 아래쪽의 다른 `if`코드는 `answers`값이 아무것도 없을 경우를 상정하였는데, 이를 `for`문에 넣지 않은 이유는 라디오버튼의 경우 1개만 고를 수 있으며, 이때 나머지 3번에서 `alert`문을 반환하기 때문에 `for`문에 넣지 않았습니다.  
<br>

## Get score
score을 얻는 과정은 배열에 넣을때 값을 설정했었는데, 이가 맞는지 `for`문을 통해 확인하며 진행했습니다.  
`questionNo===0`의경우 답은 `answers[0]`;이런 식으로처리했습니다. 
```js
for(let i=0;i<5;i++){
    if(problem.textContent===problems[i].question){
        if(problems[i].questionNo==="0"){
            if(answers[0].checked===true){
                score++
            }
        }else if(problems[i].questionNo==="1"){
            if(answers[3].checked===true){
                score++
            }
        }
        else if(problems[i].questionNo==="2"){
            if(answers[2].checked===true){
                score++
            }
        }
        else if(problems[i].questionNo==="3"){
            if(answers[1].checked===true){
                score++
            }
        }
        else if(problems[i].questionNo==="4"){
            if(answers[3].checked===true){
                score++
            }
        }
    }
}
```