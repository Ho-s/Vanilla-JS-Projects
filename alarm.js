const addAlarm=document.querySelector('#add-alarm')
const body=document.querySelector('body')


function addAlarmClick(){
    addAlarm.addEventListener('click',(e)=>{
        const containBox=document.createElement('div')
        const div=document.createElement('div')
        div.id='alarmSet'
        containBox.id='containBox'
        const date=new Date()
        const year=date.getFullYear()
        const month=date.getMonth()
        const day=date.getDate()
        const hours=date.getHours()
        const minutes=date.getMinutes()
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
        yearInput.value=year
        monthInput.value=month
        dayInput.value=day
        hoursInput.value=hours
        minutesInput.value=minutes
        yearInput.setAttribute('type','number')
        monthInput.setAttribute('type','number')
        dayInput.setAttribute('type','number')
        hoursInput.setAttribute('type','number')
        minutesInput.setAttribute('type','number')
        yearInput.setAttribute('max','9999')
        monthInput.setAttribute('max','12')
        dayInput.setAttribute('max','31')
        hoursInput.setAttribute('max','24')
        minutesInput.setAttribute('max','60')
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

        function clickBody(e){
            body.removeChild(div)
            body.removeChild(containBox)
            this.removeEventListener('click',arguments.callee)
        }
        body.addEventListener('click',clickBody)

        e.stopPropagation()
    })
}

function init(){
    addAlarmClick()
}

init()