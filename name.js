const name=document.querySelector("#name")
const button=document.querySelector("#button")
const hello=document.querySelector("#first").querySelector("h2")
const change=document.querySelector("h4")

function buttonClick(){
    button.addEventListener("click",()=>{
        if(name.value){
            let store=name.value
            name.style.display="none"
            button.style.display="none"
            hello.textContent=`Hello "${store}"`
            localStorage.setItem('name',store)
            change.style.display="block"
            hello.style.display="block"
        }else{
            alert("Please enter your name")
        }
    })
}

function loadName(){
    if(localStorage.getItem('name')!==null){
       let store=localStorage.getItem('name')
       name.style.display="none"
       button.style.display="none"
       hello.textContent=`Hello "${store}"`
       change.style.display="block"
    } else if(localStorage.getItem('name')===null){
        name.style.display="block"
        button.style.display="block"
    }
}

function changeName(){
    change.addEventListener("click",()=>{
        localStorage.removeItem('name')
        name.style.display="block"
        button.style.display="block"
        change.style.display="none"
        hello.style.display="none"
    })
}   

function init(){
    buttonClick()
    loadName()
    changeName()
}

init()