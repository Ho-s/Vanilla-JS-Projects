function getCursorPosition(a, event) {
    const rect = a.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    return [x,y]
}

let sizeNumber= 1
let drawingColor='black'
const canvas = document.querySelector('canvas')
const ctx=canvas.getContext('2d')

let i=0
let x1=0
let y1=0
function lineHandler(){
    ctx.strokeStyle = drawingColor
    ctx.lineWidth=sizeNumber
    function moveEvent(e){
        const x=getCursorPosition(canvas, e)[0]
        const y=getCursorPosition(canvas, e)[1]
        ctx.beginPath();
        ctx.moveTo(x, y);
        if(i===1){
            ctx.lineTo(x1, y1);
        }
        x1=x
        y1=y
        i=1
        ctx.stroke();
    }
    canvas.addEventListener('mousemove', moveEvent)
    canvas.addEventListener('mouseup',function remove(){
        canvas.removeEventListener('mousemove',moveEvent)
        this.removeEventListener('mouseup',remove)
        i=0
    })
}

function circleHandler(){
    ctx.fillStyle = drawingColor
    function moveEvent(e){
        const x=getCursorPosition(canvas, e)[0]
        const y=getCursorPosition(canvas, e)[1]
        ctx.beginPath();
        ctx.arc(x, y, sizeNumber, 0, Math.PI * 2, true)
        ctx.fill();
    }
    canvas.addEventListener('mousemove', moveEvent)
    canvas.addEventListener('mouseup',function remove(){
        canvas.removeEventListener('mousemove',moveEvent)
        this.removeEventListener('mouseup',remove)
    })
}

function toolSet(){
    const plus= document.querySelector('.plus')
    plus.addEventListener('click',()=>{
        if(sizeNumber<10){
            sizeNumber++
            document.querySelector('.size').textContent=sizeNumber
        }
    })

    const minus=document.querySelector('.minus')
    minus.addEventListener('click',()=>{
        if(sizeNumber>1){
            sizeNumber--
            document.querySelector('.size').textContent=sizeNumber
        }
    })

    const clear=document.querySelector('.clear')
    clear.addEventListener('click',()=>{
        ctx.clearRect(0, 0, 500, 500);
    })

    const color=document.querySelector('.color')
    color.addEventListener('change',()=>{
        drawingColor=color.value
    })
}

function setHowToDraw(){
    canvas.addEventListener('mousedown',lineHandler)
    const changeHow=document.querySelector('.changeHow')
    changeHow.addEventListener('click',()=>{
        if(changeHow.textContent==='/'){
            changeHow.textContent='●'
            canvas.removeEventListener('mousedown',lineHandler)
            canvas.addEventListener('mousedown',circleHandler)
        }else{
            changeHow.textContent='/'
            canvas.removeEventListener('mousedown',circleHandler)
            let i=0
            let x1=0
            let y1=0
            canvas.addEventListener('mousedown',lineHandler)
        }
    })
}

function init(){
    toolSet()
    setHowToDraw()
}

init()