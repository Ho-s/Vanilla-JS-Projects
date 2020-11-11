function getCursorPosition(a, event) {
    const rect = a.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    console.log(rect)

    return [x,y]
}

let sizeNumber= 5
let drawingColor='black'
const canvas = document.querySelector('canvas')
const ctx=canvas.getContext('2d')
canvas.addEventListener('mousedown',()=>{
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
})

const plus= document.querySelector('.plus')
plus.addEventListener('click',()=>{
    if(sizeNumber<30){
        sizeNumber++
        document.querySelector('.size').textContent=sizeNumber
    }
})

const minus=document.querySelector('.minus')
minus.addEventListener('click',()=>{
    if(sizeNumber>5){
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