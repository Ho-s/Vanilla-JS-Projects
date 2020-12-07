const addAlarm=document.querySelector('#add-alarm')
const body=document.querySelector('body')
const alarm=document.querySelector('#alarm')

let alarmList=[]
function addAlarmClick(){
    addAlarm.addEventListener('click',(e)=>{
        const date=new Date()
        const year=date.getFullYear()
        const month=date.getMonth()+1
        const day=date.getDate()
        const hours=date.getHours()
        const minutes=date.getMinutes()
        const containBox=document.createElement('div')
        const div=document.createElement('div')
        div.id='alarmSet'
        containBox.id='containBox'
        const form=document.createElement('form')
        const yearInput=document.createElement('input')
        const monthInput=document.createElement('input')
        const dayInput=document.createElement('input')
        const hoursInput=document.createElement('input')
        const minutesInput=document.createElement('input')
        const memo=document.createElement('textarea')
        const yearSpan=document.createElement('span')
        const monthSpan=document.createElement('span')
        const daySpan=document.createElement('span')
        const hoursSpan=document.createElement('span')
        const minutesSpan=document.createElement('span')
        const memoDiv=document.createElement('div')
        const confirmBuntton=document.createElement('button')
        const cancelButton=document.createElement('button')
        memo.setAttribute('placeHolder','내용입력 최대40자')
        yearInput.value=year
        monthInput.value=month
        dayInput.value=day
        hoursInput.value=hours
        minutesInput.value=minutes
        memo.setAttribute('maxLength',40)
        yearInput.setAttribute('type','number')
        monthInput.setAttribute('type','number')
        dayInput.setAttribute('type','number')
        hoursInput.setAttribute('type','number')
        minutesInput.setAttribute('type','number')
        yearInput.setAttribute('max','9999')
        monthInput.setAttribute('max','12')
        dayInput.setAttribute('max','31')
        hoursInput.setAttribute('max','23')
        minutesInput.setAttribute('max','59')
        yearInput.setAttribute('min','0')
        monthInput.setAttribute('min','1')
        dayInput.setAttribute('min','1')
        hoursInput.setAttribute('min','0')
        minutesInput.setAttribute('min','0')
        yearSpan.textContent='년'
        monthSpan.textContent='월'
        daySpan.textContent='일'
        hoursSpan.textContent='시'
        minutesSpan.textContent='분'
        memoDiv.textContent='내용'
        confirmBuntton.textContent='저장'
        confirmBuntton.setAttribute('type','submit')
        cancelButton.textContent='취소'
        form.appendChild(yearInput)
        form.appendChild(yearSpan)
        form.appendChild(monthInput)
        form.appendChild(monthSpan)
        form.appendChild(dayInput)
        form.appendChild(daySpan)
        form.appendChild(hoursInput)
        form.appendChild(hoursSpan)
        form.appendChild(minutesInput)        
        form.appendChild(minutesSpan)
        form.appendChild(memoDiv)
        form.appendChild(memo)
        form.appendChild(confirmBuntton)
        form.appendChild(cancelButton)
        div.appendChild(form)
        body.appendChild(div)
        body.appendChild(containBox)

        div.addEventListener('click',(e)=>{
            e.stopPropagation()
        })

        function clickBody(){
            body.removeChild(div)
            body.removeChild(containBox)
            body.removeEventListener('click',arguments.callee)
        }

        body.addEventListener('click',clickBody)
        cancelButton.addEventListener('click',clickBody)

        
        form.addEventListener('submit',(e)=>{
            if(Number(yearInput.value+
                `${monthInput.value < 10 ? `0${monthInput.value}` : monthInput.value}`+
                `${dayInput.value < 10 ? `0${dayInput.value}` : dayInput.value}`+
                `${hoursInput.value < 10 ? `0${hoursInput.value}` : hoursInput.value}`+
                `${minutesInput.value < 10 ? `0${minutesInput.value}` : minutesInput.value}`)
                <=
                Number(yearInput.value+
                `${month < 10 ? `0${month}` : month}`+
                `${day < 10 ? `0${day}` : day}`+
                `${hours < 10 ? `0${hours}` : hours}`+
                `${minutes < 10 ? `0${minutes}` : minutes}`)){
                    alert('현재 시간이나 지나간 시간을 알람으로 설정할 수 없습니다.')
                    e.preventDefault()
            }else{
                e.preventDefault()
                const li=document.createElement('li')
                const upDiv=document.createElement('div')
                const downDiv=document.createElement('div')
                const delbtn = document.createElement('a')
                upDiv.appendChild(yearSpan)
                upDiv.appendChild(monthSpan)
                upDiv.appendChild(daySpan)
                upDiv.appendChild(hoursSpan)    
                upDiv.appendChild(minutesSpan)
                yearSpan.textContent=`${yearInput.value}년`
                monthSpan.textContent=`${monthInput.value}월`
                daySpan.textContent=`${dayInput.value}일`
                hoursSpan.textContent=`${hoursInput.value < 10 ? `0${hoursInput.value}` : hoursInput.value}시`
                minutesSpan.textContent=`${minutesInput.value < 10 ? `0${minutesInput.value}` : minutesInput.value}분`
                downDiv.textContent=memo.value
                li.appendChild(upDiv)
                li.appendChild(downDiv)
                li.appendChild(delbtn)
                alarm.appendChild(li)
                if (alarmList.length === 0) {
                    li.setAttribute('name','0')
                } else {
                    li.setAttribute('name',Number(alarmList[alarmList.length - 1].name)+1) 
                }                
                let contentsStorage = {
                    name: li.getAttribute('name'),
                    contents: downDiv.textContent,
                    year:yearSpan.textContent,
                    month:monthSpan.textContent,
                    day:daySpan.textContent,
                    hours:hoursSpan.textContent,
                    minutes:minutesSpan.textContent
                }
                alarmList.push(contentsStorage)
                localStorage.setItem('alarmList', JSON.stringify(alarmList))
                body.removeChild(div)
                body.removeChild(containBox)
                body.removeEventListener('click',clickBody)
                delbtn.addEventListener('click', (e) => {
                    const it = e.target.parentNode
                    alarm.removeChild(it)
                    const cleanList = alarmList.filter(function(that) {
                        return that.name !== it.getAttribute('name')
                    })
                    alarmList = cleanList
                    localStorage.setItem('alarmList', JSON.stringify(alarmList))
                })
            }
        })
        e.stopPropagation()
    })
}

function loadAlarm() {
    const loading = localStorage.getItem('alarmList')
    const parseLoaded = JSON.parse(loading)
    if (parseLoaded) {
        alarmList = parseLoaded
        for (let i = 0; i < alarmList.length; i++) {
            const li=document.createElement('li')
            const upDiv=document.createElement('div')
            const downDiv=document.createElement('div')
            const delbtn = document.createElement('a')
            const yearSpan=document.createElement('span')
            const monthSpan=document.createElement('span')
            const daySpan=document.createElement('span')
            const hoursSpan=document.createElement('span')
            const minutesSpan=document.createElement('span')
            upDiv.appendChild(yearSpan)
            upDiv.appendChild(monthSpan)
            upDiv.appendChild(daySpan)
            upDiv.appendChild(hoursSpan)    
            upDiv.appendChild(minutesSpan)
            li.appendChild(upDiv)
            li.appendChild(downDiv)
            li.appendChild(delbtn)
            alarm.appendChild(li)
            li.setAttribute('name',alarmList[i].name)
            yearSpan.textContent=alarmList[i].year
            monthSpan.textContent=alarmList[i].month
            daySpan.textContent=alarmList[i].day
            hoursSpan.textContent=alarmList[i].hours
            minutesSpan.textContent=alarmList[i].minutes
            downDiv.textContent=alarmList[i].contents
            delbtn.addEventListener('click', (e) => {
                const it = e.target.parentNode
                alarm.removeChild(it)
                const cleanList = alarmList.filter(function(that) {
                    return that.name !== it.getAttribute('name')
                })
                alarmList = cleanList
                localStorage.setItem('alarmList', JSON.stringify(alarmList))
            })
        }
    }
}

function setAlarmEvent(){
    let audio = new Audio('calling.mp3')
    setInterval(()=>{
        if(alarmList.length>0){
            const date=new Date()
            const year=date.getFullYear()
            const month=date.getMonth()+1
            const day=date.getDate()
            const hours=date.getHours()
            const minutes=date.getMinutes()
            for(let i=0;i<alarmList.length;i++){
                if(date.getFullYear()===Number(alarmList[i].year.substr(0,alarmList[i].year.length-1))){
                    if(date.getMonth()+1===Number(alarmList[i].month.substr(0,alarmList[i].month.length-1))){
                        if(date.getDate()===Number(alarmList[i].day.substr(0,alarmList[i].day.length-1))){
                            if(date.getHours()===Number(alarmList[i].hours.substr(0,alarmList[i].hours.length-1))){
                                if(date.getMinutes()===Number(alarmList[i].minutes.substr(0,alarmList[i].minutes.length-1))){
                                    audio.play()
                                    audio.addEventListener('ended', function() { 
                                        this.currentTime = 0;
                                        this.play();
                                    }, false);
                                    const gettingName=document.getElementsByName(alarmList[i].name)
                                    alarm.removeChild(gettingName[0])
                                    const containBox=document.createElement('div')
                                    const div=document.createElement('div')
                                    const alert=document.createElement('h3')
                                    alert.textContent=alarmList[i].year+alarmList[i].month+alarmList[i].day+alarmList[i].hours+alarmList[i].minutes+'\n'+alarmList[i].contents
                                    alarmList.splice(i,1)
                                    localStorage.setItem('alarmList', JSON.stringify(alarmList))
                                    div.id='stopButton'
                                    containBox.id='containBox'
                                    body.appendChild(alert)
                                    body.appendChild(div)
                                    body.appendChild(containBox)
                                    div.addEventListener('click',()=>{
                                        audio.pause()
                                        body.removeChild(alert)
                                        body.removeChild(div)
                                        body.removeChild(containBox)
                                    })
                                }
                            }
                        }
                    }
                }
            }
        }
    },1000)

}

function init(){
    addAlarmClick()
    loadAlarm()
    setAlarmEvent()
}

init()