const button=document.querySelector('.button')
const long=document.querySelector('.long')
const upper=document.querySelector('.upper')
const lower=document.querySelector('.lower')
const number=document.querySelector('.number')
const symbol=document.querySelector('.symbol')
const space=document.querySelector('.space')

number.checked=true
long.value=1
const upperCase=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const lowerCase=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const numBers=['0','1','2','3','4','5','6','7','8','9']
const symBols=['`','~','!','@','#','$','%','^','&','*','(',')','_','-','=','+','[','{',']','}','|','\\',';',':',"'",'"',',','<','>','>','.','/','?']

button.addEventListener('click',()=>{
    if(!number.checked&&!upper.checked&&!lower.checked&&!symbol.checked){
        alert('Check at least one box')
    }else{
        if(long.value<0){
            alert('length must be 1 or more')
        }else{
            const candidate=[]
            const password=[]
            if(upper.checked){
                for(let i=0;i<upperCase.length;i++){
                    candidate.push(upperCase[i])
                }
            }
            if(lower.checked){
                for(let i=0;i<lowerCase.length;i++){
                    candidate.push(lowerCase[i])
                }
            }
            if(number.checked){
                for(let i=0;i<numBers.length;i++){
                    candidate.push(numBers[i])
                }
            }
            if(symbol.checked){
                for(let i=0;i<symBols.length;i++){
                    candidate.push(symBols[i])
                }
            }
            for(let i=0;i<long.value;i++){
                password.push(candidate[Math.floor(Math.random()*candidate.length)])
            }
            space.textContent=password
            space.textContent=space.textContent.replaceAll(",",'')
        }
    }
})