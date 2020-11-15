const chobo=document.querySelector('.chobo')
const noraml=document.querySelector('.normal')
const gosu=document.querySelector('.gosu')

function addChoboEvent(){
    chobo.addEventListener('click',()=>{
        const nonogram=[]
        let rowIndex=1
        let cellIndex=1
        let n=0
        let v=0
        let blackWhite=[]
        const div=document.createElement('div')
        div.setAttribute('class','small')
        for(let i=0;i<36;i++){
            const block=document.createElement('div')
            if(i<7||i===12||i===18||i===24||i===30){
                block.setAttribute('class','numbers')
                block.id=v
                v++
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
        document.querySelector('body').appendChild(div)
        for(let j=1;j<6;j++){
            for(let i=0;i<25;i++){
                if(nonogram[i][0]===j){
                    if(nonogram[i][2]==='black'){
                        blackWhite.push('1')
                    }else{
                        blackWhite.push('0')
                    }
                }
            }
            let test= document.getElementById(`${j+5}`)
            test.textContent=blackWhite
            test.textContent=test.textContent.replaceAll(',',' ')
            test.textContent=test.textContent.replaceAll('1 1 1 1 1','5')
            test.textContent=test.textContent.replaceAll('1 1 1 1','4')
            test.textContent=test.textContent.replaceAll('1 1 1','3')
            test.textContent=test.textContent.replaceAll('1 1','2')
            test.textContent=test.textContent.replaceAll('0','')
            blackWhite=[]
        }
        for(let j=1;j<6;j++){
            for(let i=0;i<25;i++){
                if(nonogram[i][1]===j){
                    if(nonogram[i][2]==='black'){
                        blackWhite.push('1')
                    }else{
                        blackWhite.push('0')
                    }
                }
            }
            let test= document.getElementById(`${j}`)
            test.textContent=blackWhite
            test.textContent=test.textContent.replaceAll(',',' ')
            test.textContent=test.textContent.replaceAll('1 1 1 1 1','5')
            test.textContent=test.textContent.replaceAll('1 1 1 1','4')
            test.textContent=test.textContent.replaceAll('1 1 1','3')
            test.textContent=test.textContent.replaceAll('1 1','2')
            test.textContent=test.textContent.replaceAll('0','')
            if(test.textContent===''){
                test.textContent='0'
            }
            blackWhite=[]
        }
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
