function storeTime(){
    localStorage.setItem('hours',0)
    localStorage.setItem('minutes',0)
    localStorage.setItem('seconds',0)
    if(hours===null){
        hours=0
    }
    if(minutes===null){
        minutes=0
    }
    if(seconds===null){
        seconds=0
    }
    setInterval(()=>{
        localStorage.setItem('hours',hours)
        localStorage.setItem('minutes',minutes)
        localStorage.setItem('seconds',seconds)
    },4)
}

function intimeEvent(){
    hours=localStorage.getItem('hours')
    minutes=localStorage.getItem('minutes')
    seconds=localStorage.getItem('seconds')
    setInterval(()=>{
        document.querySelector("#timer").querySelector("h2").textContent=`${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}`:seconds}`
        if(seconds>=60){
            minutes++
            seconds=0
        } else if(minutes>=60){
            hours++
            minutes=0
        }
    },4)
}

const video=document.querySelector('#video')

let inter=-1
const start=document.querySelector("#start")
start.addEventListener("click",()=>{
    if(inter===-1){
        inter = setInterval(()=>{
            seconds++
        },1000)
        start.textContent="중지"
        video.style.display='block'
    } else{
        clearInterval(inter)
        inter=-1
        start.textContent="시작"
        video.style.display='none'
        video.innerHTML='pause';
    }
})

function resetCheck(){
    if(confirm("정말 초기화하시겠습니까?")===true){
        hours=0
        minutes=0
        seconds=0
        clearInterval(inter)
        inter=-1
        start.textContent="시작"
    }else{
        return false;
    }
}

function saveRec(){
    localStorage.setItem('records', JSON.stringify(records))
}

let records=[]
const history=document.querySelector("#history")
function deleteRec(event){
    const li=event.target.parentNode
    history.removeChild(li)
    const cleanRec=records.filter(function(rec){
        return rec.id!==parseInt(li.id)
    })
    records=cleanRec;
    saveRec()
}

let recordsId=[] //deduplication
function makeList(){
    const li=document.createElement("li")
    const delBtn=document.createElement("button")
    let newId=records.length+1
    function deduplication(){ //deduplication
        for(let i=1;i<=recordsId[recordsId.length-1];i++){
            if(newId===i){
                newId++
            }
        }
    }
    deduplication() //deduplication
    const when=document.createElement("span")
    const howMany=document.createElement("span")
    when.style.marginRight='20px'
    delBtn.textContent="삭제"
    delBtn.addEventListener("click",deleteRec)
    delBtn.style.float
    const date=new Date()
    when.textContent=`${date.getFullYear()}년 ${date.getMonth()+1}월 ${date.getDate()}일`
    howMany.textContent=`${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}`:seconds}`
    li.appendChild(when)
    li.appendChild(howMany)
    li.appendChild(delBtn)
    li.id= newId
    history.appendChild(li)
    const recObj={
        text:when.textContent,
        number:howMany.textContent,
        id:newId
    }
    const id=recObj.id //deduplication
    records.push(recObj);
    recordsId.push(id); //deduplication
    saveRec() 
}

function inputCheck(){
    if(confirm("정말 기록하시겠습니까?\n*주의*시간이 초기화 됩니다.")===true){
        makeList();
        hours=0
        minutes=0
        seconds=0
        clearInterval(inter)
        inter=-1
        start.textContent="시작"
    }else{
        return false;
    }
}

const wholeTime=document.querySelector('.whole-time')
function loadRecords(){
    let wholeHours=0
    let wholeMinutes=0
    let wholeSeconds=0
    const loadedRecords=localStorage.getItem('records')
    if(loadedRecords!==null){
        const parsedRecords= JSON.parse(loadedRecords)
        records=parsedRecords
        for(let i=0;i<records.length;i++){
            wholeHours+=Number(records[i].number[0]+records[i].number[1])
            wholeMinutes+=Number(records[i].number[3]+records[i].number[4])
            wholeSeconds+=Number(records[i].number[6]+records[i].number[7])
            const li=document.createElement("li")
            const delBtn=document.createElement("button")
            const when=document.createElement("span")
            const howMany=document.createElement("span")
            when.style.marginRight='20px'
            delBtn.addEventListener("click",deleteRec)
            delBtn.textContent="삭제"
            li.appendChild(when)
            when.textContent=records[i].text
            li.appendChild(howMany)
            howMany.textContent=records[i].number
            li.appendChild(delBtn)
            li.id= records[i].id
            history.appendChild(li)
            recordsId.push(records[i].id) //deduplication
        }
        wholeMinutes+=parseInt(wholeSeconds/60)
        wholeSeconds=wholeSeconds%60
        wholeHours+=parseInt(wholeMinutes/60)
        wholeMinutes=wholeMinutes%60
        
        wholeTime.textContent=`전체 공부 시간 ${records.length}일동안 ${wholeHours < 10 ? `0${wholeHours}` : wholeHours}:${wholeMinutes < 10 ? `0${wholeMinutes}` : wholeMinutes}:${wholeSeconds < 10 ? `0${wholeSeconds}`:wholeSeconds}`
    }
}

const more=document.querySelector("#more")
more.addEventListener("click",()=>{
    if(more.textContent==="감추기"){
        history.style.display="none"
        more.textContent="더 보기"
    } else if(more.textContent==="더 보기"){
        history.style.display="block"
        more.textContent="감추기"
    }
})

function init(){
    intimeEvent();
    loadRecords();
    storeTime();
}

init()