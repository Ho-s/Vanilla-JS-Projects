const starting=document.querySelector("#start")
const submit=document.querySelector("#submit")
const space=document.querySelector("#space")
const problem=document.querySelector("#problem")
const first=document.querySelector("#first-radio")
const second=document.querySelector("#second-radio")
const third=document.querySelector("#third-radio")
const fourth=document.querySelector("#fourth-radio")
const question=document.querySelector("#problem")
const no1=document.querySelector("#no1")
const no2=document.querySelector("#no2")
const no3=document.querySelector("#no3")
const no4=document.querySelector("#no4")
const a1=document.querySelector("#a1")
const a2=document.querySelector("#a2")
const a3=document.querySelector("#a3")
const a4=document.querySelector("#a4")
const answers=document.getElementsByName("answers")
const restart=document.querySelector("#restart")

function start(){
    starting.addEventListener("click",()=>{
        generateProblems()
        shuffle()
        problems=questions
        if(localStorage.getItem('name')){
            space.style.animation="expand 2s"
            space.style.height="480px"
            problem.style.animation="fadeOut 1s"
            submit.style.display="block"
            starting.style.display="none"
            no1.textContent=problems[0].no1
            no2.textContent=problems[0].no2
            no3.textContent=problems[0].no3
            no4.textContent=problems[0].no4
            setTimeout(()=>{
                problem.textContent=problems[0].question
                problem.style.animation="fadeIn 1s"
            },900)
            setTimeout(()=>{
                first.style.animation="fadeIn 1s"
            },400)
            setTimeout(()=>{
                second.style.animation="fadeIn 1s"
            },800)
            setTimeout(()=>{
                third.style.animation="fadeIn 1s"
                first.style.opacity="1"
            },1200)
            setTimeout(()=>{
                fourth.style.animation="fadeIn 1s"
                second.style.opacity="1"
            },1600)
            setTimeout(()=>{
                third.style.opacity="1"
            },2000)
            setTimeout(()=>{
                fourth.style.opacity="1"
            },2400)
        }else{
            alert("Please enter your name before start")
        }
    })
}

let problems=[]
let questions=[]
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
    problemObj={
        questionNo:"1",
        question:"병호의 나이는 몇살일까요?",
        no1:"24",
        no2:"25",
        no3:"26",
        no4:"27"
    }
    problems.push(problemObj)
    problemObj={
        questionNo:"2",
        question:"병호가 사는 지역은 어디일까요?",
        no1:"안양",
        no2:"부천",
        no3:"안산",
        no4:"서울"
    }
    problems.push(problemObj)
    problemObj={
        questionNo:"3",
        question:"병호의 키는 몇일까요?",
        no1:"176",
        no2:"187",
        no3:"169",
        no4:"191"
    }
    problems.push(problemObj)
    problemObj={
        questionNo:"4",
        question:"병호가 가장 좋아하는 계절은 무엇일까요??",
        no1:"봄",
        no2:"여름",
        no3:"가을",
        no4:"겨울"
    }
    problems.push(problemObj)
}

function shuffle(){
    for(let n=0;n<5;n++){
        const index=Math.floor(Math.random()*(4-n))
        questions.push(problems[index])
        problems.splice(index,1)
    }
}

let score=0
let n=0
function answer(){
    generateProblems()
    submit.addEventListener("click",()=>{
        for(let v=0;v<4;v++){
            if(answers[v].checked===true){
                if(n<4){
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
                    problem.style.animation="fadeOut 1s"
                    first.style.animation="fadeOut 1s"
                    second.style.animation="fadeOut 1s"
                    third.style.animation="fadeOut 1s"
                    fourth.style.animation="fadeOut 1s"
                    setTimeout(()=>{
                        problem.textContent=problems[n].question
                        no1.textContent=problems[n].no1
                        no2.textContent=problems[n].no2
                        no3.textContent=problems[n].no3
                        no4.textContent=problems[n].no4
                        problem.style.animation="fadeIn 1s"
                        first.style.animation="fadeIn 1s"
                        second.style.animation="fadeIn 1s"
                        third.style.animation="fadeIn 1s"
                        fourth.style.animation="fadeIn 1s"
                        for(let i=0;i<4;i++){
                            answers[i].checked=false
                        }
                    },900)
                    n=n+1
                }else{
                    problem.style.animation="fadeOut 1s"
                    first.style.animation="fadeOut 1s"
                    second.style.animation="fadeOut 1s"
                    third.style.animation="fadeOut 1s"
                    fourth.style.animation="fadeOut 1s"
                    space.style.animation="contract 2s"
                    submit.style.display="none"
                    restart.style.display="block"
                    setTimeout(()=>{
                        first.style.opacity="0"
                        second.style.opacity="0"
                        third.style.opacity="0"
                        fourth.style.opacity="0"
                        problem.textContent=`당신의 점수는 ${score}/5입니다.`
                        problem.style.animation="fadeIn 1s"
                    },900)
                    setTimeout(()=>{
                        space.style.height="160px"
                    },1900)
                }
            }
        }
        if(answers[0].checked===false&&answers[1].checked===false&&answers[2].checked===false&&answers[3].checked===false){
            alert("There must exist a checked box")
        }
    })
}

function restarting(){
    restart.addEventListener("click",()=>{
        problem.style.animation="fadeOut 1s"
        restart.style.animation="fadeOut 1s"
        setTimeout(()=>{
            starting.style.display="block"
            restart.style.display="none"
            starting.style.animation="fadeIn 1s"
            problem.style.animation="fadeIn 1s"
            problem.textContent="Click the start button after enter your name."
            localStorage.removeItem('name')
        },900)
    })
}

function init(){
    start()
    restarting()
    answer()
}

init()