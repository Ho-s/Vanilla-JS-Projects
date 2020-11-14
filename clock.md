# canvas.getContext
`html`의 canvas엘리먼트와 `js`의 `canvas.getContext('2d')`를 이용하여 각 시각마다 그림을 그리는 식으로 시계를 구현하였습니다.  
<br>

## Background
배경 초침 분침 시침이 구현이되지 않은 백그라운드 이미지는 다음과 같으며, `context.arc`를 통해 바깥 원을, `context.fillText`를 통해, 3 6 9 12의 숫자를 구현하였습니다. 또한 `moteTO`, `lineTO`를 이용화여 1시,2시 등을 표시하였습니다.  
<img src="./readmeImages/2.PNG" width="330px">
```js
function clockDraw(){
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
```  
<br>

## Draw Hands
초침 분침 시침은 길이와 색깔로 구분하였고, 검정색이 시침, 회색이 분침, 흰색이 초침으로 설정하였습니다.  
`setInterval`안에 `new Date()`를 불러오고, 각도에 따라서 시침은 30도씩, 분침 초침은 6도씩 움직여서 새로운 침을 그리도록 설정하였습니다.  
움직인 후에는 그 전에 있던 자리에 그려진 침을 삭제하기 위해 같은 크기의 모양으로 배경색깔과 똑같은 침을 그리도록 설정하였습니다.  
<img src="./readmeImages/3.PNG" width="330px">

```js
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
```
위는 침을 그리기 위한 코드이고, 아래는 1분, 1초, 1시간이 지났을 때 전에 그려진 침을 삭제하기 위한 코드입니다.
```js
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
```
