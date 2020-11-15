const chobo=document.querySelector('.chobo')
const noraml=document.querySelector('.normal')
const gosu=document.querySelector('.gosu')

function addChoboEvent(){
    chobo.addEventListener('click',()=>{
        const nonogram=[]
        let rowIndex=1
        let cellIndex=1
        let n=0
        const div=document.createElement('div')
        div.setAttribute('class','small')
        for(let i=0;i<36;i++){
            const block=document.createElement('div')
            if(i<7||i===12||i===18||i===24||i===30){
                block.setAttribute('class','numbers')
            }else{
                let random=Math.floor(Math.random()*2)
                if(random===0){
                    block.setAttribute('class','black')
                    random='black'
                }else{
                    block.setAttribute('class','white')
                    random='white'
                }
                if(cellIndex<6){
                    let nonoIndex=[rowIndex,cellIndex,random]
                    nonogram.push(nonoIndex)
                    cellIndex++
                    n++
                }else{
                    rowIndex++
                    cellIndex=1
                    let nonoIndex=[rowIndex,cellIndex,random]
                    nonogram.push(nonoIndex)
                    cellIndex++
                    n++
                }
            }

            div.appendChild(block)
        }
        console.log(nonogram)
        document.querySelector('body').appendChild(div)
    })
}

function addNormalEvent(){
    //
}

function addGosuEvent(){
    //
}

function init(){
    addChoboEvent()
    addNormalEvent()
    addGosuEvent()
}

init()