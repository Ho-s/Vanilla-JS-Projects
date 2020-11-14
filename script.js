const canvas = document.querySelector('canvas')
const ctx=canvas.getContext('2d')

const Radian=(Math.PI/180)// radian=(Math.PI/180)*degrees

function clockDraw(){
    ctx.beginPath();
        ctx.fillStyle='#e9e9e9'
        ctx.arc(250, 250, 242, 0, Math.PI*2, true) //outside
    ctx.fill();

    ctx.strokeStyle='black'
    ctx.fillStyle='black'
    ctx.lineWidth=2
    ctx.font = "36px Dotum";
    ctx.fillText("12", 230, 45);
    ctx.fillText("3", 450, 263);
    ctx.fillText("6", 239, 480);
    ctx.fillText("9", 30, 260);
    
    ctx.beginPath();
        ctx.lineWidth=8
        ctx.arc(250, 250, 246, 0, Math.PI*2, true) //outside
    ctx.stroke();



    ctx.beginPath();
        ctx.lineWidth=2
        ctx.moveTo(453,133)
        ctx.lineTo(439,140)
        ctx.moveTo(368,48)
        ctx.lineTo(359,61) //1,2

        ctx.moveTo(453,367)
        ctx.lineTo(439,360)
        ctx.moveTo(368,452)
        ctx.lineTo(359,439) //4,5

        ctx.moveTo(47,367)
        ctx.lineTo(61,360)
        ctx.moveTo(132,452)
        ctx.lineTo(141,439) //7,8

        ctx.moveTo(47,133)
        ctx.lineTo(61,140)
        ctx.moveTo(132,48)
        ctx.lineTo(141,61) //11,12
    ctx.stroke();
}

function eventCall(){
    setInterval(()=>{
        const date= new Date()
        let hours=date.getHours()
        let minutes=date.getMinutes()
        let seconds=date.getSeconds()
        function handDraw(){

            function delTrace(){
                ctx.beginPath()
                    ctx.lineWidth='9'
                    ctx.strokeStyle='#e9e9e9'
                    ctx.arc(250,250,140, Radian*(((minutes-1)*6)-90), Radian*(((minutes-1)*6)-90), true) 
                    ctx.lineTo(250,250)
                ctx.stroke()

                ctx.beginPath()
                    ctx.lineWidth='16'
                    ctx.strokeStyle='#e9e9e9'
                    ctx.arc(250,250,100, Radian*(((hours-1)*30)-90), Radian*(((hours-1)*30)-90), true) 
                    ctx.lineTo(250,250)
                ctx.stroke()

                ctx.beginPath()
                    ctx.lineWidth='4'
                    ctx.strokeStyle='#e9e9e9'
                    ctx.arc(250,250,180, Radian*(((seconds-1)*6)-90), Radian*(((seconds-1)*6)-90), true) 
                    ctx.lineTo(250,250)
                ctx.stroke()
            }

            function hoursHand(){
                ctx.beginPath()
                    ctx.lineCap='round'
                    ctx.lineWidth='16'
                    ctx.strokeStyle='black'
                    ctx.arc(250,250,100, Radian*((hours*30)-90), Radian*((hours*30)-90), true) 
                    ctx.lineTo(250,250)
                ctx.stroke()
            }
        
            function minutesHand(){
                ctx.beginPath()
                    ctx.lineWidth='8'
                    ctx.strokeStyle='grey'
                    ctx.arc(250,250,140, Radian*((minutes*6)-90), Radian*((minutes*6)-90), true) 
                    ctx.lineTo(250,250)
                ctx.stroke()
            }
        
            function secondsHand(){
                ctx.beginPath()
                    ctx.lineWidth='3'
                    ctx.strokeStyle='white'
                    ctx.arc(250,250,180, Radian*((seconds*6)-90), Radian*((seconds*6)-90), true) 
                    ctx.lineTo(250,250)
                ctx.stroke()
            }

            function paintDot(){
                ctx.beginPath();
                    ctx.arc(250,250,10, 0, Math.PI*2, true) //middle dot
                    ctx.fillStyle='white'
                ctx.fill();
            }
            delTrace()
            hoursHand()
            minutesHand()
            secondsHand()
            paintDot()
        }
        handDraw()
    },4)
    setInterval(()=>{
        ctx.clearRect(0,0,500,500)
        clockDraw()
    },60000)
}

function init(){
    eventCall()
    clockDraw()
}

init()