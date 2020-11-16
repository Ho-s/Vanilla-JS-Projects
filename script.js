const chobo=document.querySelector('.chobo')
const normal=document.querySelector('.normal')
const gosu=document.querySelector('.gosu')
const lifeDiv=document.querySelector('.life')
const whole=document.querySelector('.whole')

function createNonogram(n,a,b){
    whole.style.width=`${a}px`
    whole.style.height=`${a}px`
    whole.style.margin=`${b}px auto`

    chobo.style.display='none'
    normal.style.display='none'
    gosu.style.display='none'

    const nonogram=[]
    let blackCount=0
    const div=document.createElement('div')

    function createSpace(){
        let rowIndex=1
        let columnIndex=1
        let v=0
        for(let i=0;i<(n+1)*(n+1);i++){
            const block=document.createElement('div')
            if(i<(n+1)||i%(n+1)===0){
                block.setAttribute('class','numbers')
                block.id=v
                v++
            }else{
                let random=Math.floor(Math.random()*2)
                if(random===0){
                    block.setAttribute('class','black')
                    random='black'
                    blackCount++
                }else{
                    block.setAttribute('class','white')
                    random='white'
                }

                if(columnIndex<(n+1)){
                    let nonoIndex=[rowIndex,columnIndex,random]
                    nonogram.push(nonoIndex)
                    columnIndex++
                }else{
                    rowIndex++
                    columnIndex=1
                    let nonoIndex=[rowIndex,columnIndex,random]
                    nonogram.push(nonoIndex)
                    columnIndex++
                }
            }            
            div.appendChild(block)
        }
        whole.appendChild(div)
    }
    
    function createRowColumn(){
        let blackWhite=[]
        for(let j=1;j<(n+1);j++){
            for(let i=0;i<n*n;i++){
                if(nonogram[i][0]===j){
                    if(nonogram[i][2]==='black'){
                        blackWhite.push('1')
                    }else{
                        blackWhite.push('0')
                    }
                }
            }
            let test= document.getElementById(`${j+n}`)
            test.textContent=blackWhite
            test.textContent=test.textContent.replaceAll(',',' ')
            test.textContent=test.textContent.replaceAll('1 1 1 1 1 1 1 1 1 1 1 1 1 1 1','15')
            test.textContent=test.textContent.replaceAll('1 1 1 1 1 1 1 1 1 1 1 1 1 1','14')
            test.textContent=test.textContent.replaceAll('1 1 1 1 1 1 1 1 1 1 1 1 1','13')
            test.textContent=test.textContent.replaceAll('1 1 1 1 1 1 1 1 1 1 1 1','12')
            test.textContent=test.textContent.replaceAll('1 1 1 1 1 1 1 1 1 1 1','11')
            test.textContent=test.textContent.replaceAll('1 1 1 1 1 1 1 1 1 1','10')
            test.textContent=test.textContent.replaceAll('1 1 1 1 1 1 1 1 1','9')
            test.textContent=test.textContent.replaceAll('1 1 1 1 1 1 1 1','8')
            test.textContent=test.textContent.replaceAll('1 1 1 1 1 1 1','7')
            test.textContent=test.textContent.replaceAll('1 1 1 1 1 1 ','6')
            test.textContent=test.textContent.replaceAll('1 1 1 1 1','5')
            test.textContent=test.textContent.replaceAll('1 1 1 1','4')
            test.textContent=test.textContent.replaceAll('1 1 1','3')
            test.textContent=test.textContent.replaceAll('1 1','2')
            test.textContent=test.textContent.replaceAll('0','')
            blackWhite=[]
            if(test.textContent===''){
                test.textContent='0'
            }
        } // column

        for(let j=1;j<(n+1);j++){
            for(let i=0;i<n*n;i++){
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
            test.textContent=test.textContent.replaceAll('1 1 1 1 1 1 1 1 1 1 1 1 1 1 1','15')
            test.textContent=test.textContent.replaceAll('1 1 1 1 1 1 1 1 1 1 1 1 1 1','14')
            test.textContent=test.textContent.replaceAll('1 1 1 1 1 1 1 1 1 1 1 1 1','13')
            test.textContent=test.textContent.replaceAll('1 1 1 1 1 1 1 1 1 1 1 1','12')
            test.textContent=test.textContent.replaceAll('1 1 1 1 1 1 1 1 1 1 1','11')
            test.textContent=test.textContent.replaceAll('1 1 1 1 1 1 1 1 1 1','10')
            test.textContent=test.textContent.replaceAll('1 1 1 1 1 1 1 1 1','9')
            test.textContent=test.textContent.replaceAll('1 1 1 1 1 1 1 1','8')
            test.textContent=test.textContent.replaceAll('1 1 1 1 1 1 1','7')
            test.textContent=test.textContent.replaceAll('1 1 1 1 1 1 ','6')
            test.textContent=test.textContent.replaceAll('1 1 1 1 1','5')
            test.textContent=test.textContent.replaceAll('1 1 1 1','4')
            test.textContent=test.textContent.replaceAll('1 1 1','3')
            test.textContent=test.textContent.replaceAll('1 1','2')
            test.textContent=test.textContent.replaceAll('0','')
            blackWhite=[]
            if(test.textContent===''){
                test.textContent='0'
            } 
        } //row
    }
    
    function createClickEvent(){
        let life=3
        lifeDiv.textContent=`Your life=${life}`
        document.querySelectorAll('.white').forEach(function(element){
            function left(e){
                if(!e.target.style.backgroundImage){
                    life--
                    lifeDiv.textContent=`Your life=${life}`
                    e.target.style.backgroundImage='url(./images/redX.png)'
                    e.target.removeEventListener('contextmenu',right)
                }else if(e.target.style.backgroundImage==='url("./images/X.png")'){
                    life--
                    lifeDiv.textContent=`Your life=${life}`
                    e.target.style.backgroundImage='url(./images/redX.png)'
                    e.target.removeEventListener('contextmenu',right)
                }
                    
                if(life===0){
                    setTimeout(()=>{
                        alert('남은 목숨이 없습니다. 다시시작하십시오.')
                        whole.removeChild(div)
                        chobo.style.display='inline-block'
                        normal.style.display='inline-block'
                        gosu.style.display='inline-block'
                        lifeDiv.textContent=''
                        whole.style.width='90px'
                        whole.style.height='90px'
                        whole.style.margin='400px auto'
                    },1000)
                }
            }
            function right(e){
                e.preventDefault()
                if(!e.target.style.backgroundImage){
                    e.target.style.backgroundImage='url(./images/X.png)'
                }else{
                    e.target.style.backgroundImage=''
                }
            }
            element.addEventListener('click',left)
            element.addEventListener('contextmenu',right)
        })
    
        document.querySelectorAll('.black').forEach(function(element){
            function left(e){
                e.target.style.backgroundColor='black'
                e.target.style.backgroundImage=''
                e.target.removeEventListener('contextmenu',right)
                blackCount--
                if(blackCount===0){
                    setTimeout(()=>{
                        alert('승리하셨습니다.')
                        whole.removeChild(div)
                        chobo.style.display='inline-block'
                        normal.style.display='inline-block'
                        gosu.style.display='inline-block'
                        lifeDiv.textContent=''
                        whole.style.width='90px'
                        whole.style.height='90px'
                        whole.style.margin='400px auto'
                    },1000)
                }
            }
            
            function right(e){
                e.preventDefault()
                if(!e.target.style.backgroundImage){
                    e.target.style.backgroundImage='url(./images/X.png)'
                }else{
                    e.target.style.backgroundImage=''
                }
            }

            element.addEventListener('click',left)
            element.addEventListener('contextmenu',right)
        })
    }

    createSpace()
    createRowColumn()
    createClickEvent()
}

function addClickEvent(){
    chobo.addEventListener('click',()=>{
        createNonogram(5,300,300)
    })

    normal.addEventListener('click',()=>{
        createNonogram(10,550,150)
    })

    gosu.addEventListener('click',()=>{
        createNonogram(15,800,50)
    })
}

function init(){
    addClickEvent()
}

init()