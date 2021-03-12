const headerCategory=document.querySelector("#header-category")
const hidden=document.querySelector("#hidden")
const mainCategory=document.querySelector("#main-category")
const input=document.querySelector("#input")
const search=document.querySelector("#search")
const headerCreate=document.querySelector("#header-create")
const headerCreateSpace= document.querySelector("#header-create-space")
const headerApps=document.querySelector("#header-apps")
const headerAppsSpace =document.querySelector("#header-apps-space")
const headerAlert=document.querySelector("#header-alert")
const headerAlertSpace=document.querySelector("#header-alert-space")
const headerLogin=document.querySelector("#header-login")
const headerLoginSpace=document.querySelector("#header-login-space")
const mainHome=document.querySelector("#main-home")
const containerHome=document.querySelector("#container-home")
const mainHot=document.querySelector("#main-hot")
const containerHot=document.querySelector("#container-hot")
const mainSub=document.querySelector("#main-sub")
const containerSub=document.querySelector("#container-sub")
const mainStorage=document.querySelector("#main-storage")
const containerStorage=document.querySelector("#container-storage")
const video=document.querySelector("#video")
const stick=document.querySelector("#stick")
const img=document.querySelector("#img")
const playing=document.querySelector("#playing")
const add=document.querySelector("#add")
const late=document.querySelector("#late")
const information=document.querySelector("#information")
const time1=document.querySelector("#time1")
const back1=document.querySelector("#back1")
const x=document.querySelector("#x")
const expand=document.querySelector("#expand")
const contract=document.querySelector("#contract")
const dotBtn=document.querySelector("#dot-btn")
const idClose=document.querySelector("#close")
const videoDownVideos=document.querySelector("#video-down-videos")
const VideoDownMore=document.querySelector("#video-down-more")
const moreVideos=document.querySelector("#more-videos")
const VideoDownName=document.querySelector("#video-down-name")
const lateM=document.querySelector("#lateM")
const addM=document.querySelector("#addM")
const dots=document.querySelector("#dots")
const dotsM=document.querySelector("#dotsM")
const late1=document.querySelector("#late1")
const late1M=document.querySelector("#late1M")
const add1=document.querySelector("#add1")
const add1M=document.querySelector("#add1M")
const dots1=document.querySelector("#dots1")
const dots1M=document.querySelector("#dots1M")
const dotBtn1=document.querySelector("#dot-btn1")
const body=document.querySelector('body')

function clickInside(element,objective){
    element.addEventListener('click',()=>{
        window.addEventListener('click',function handler(e){
            if(element.contains(e.target)){
                objective.style.display="inline-block"
            }else{
                objective.style.display="none"
                this.removeEventListener('click',handler)
            }
        })
    })
}

clickInside(input,search)
clickInside(headerApps,headerAppsSpace)
clickInside(headerAlert,headerAlertSpace)
clickInside(headerCreate,headerCreateSpace)
clickInside(headerLogin,headerLoginSpace)

search.addEventListener('click',(e)=>{
    e.stopPropagation()
})

headerCategory.addEventListener("click",()=>{
    if(hidden.style.display==="none"){ 
        hidden.style.display="inline-block"
        mainCategory.style.display="none"
    } else{
        mainCategory.style.display="inline-block"
        hidden.style.display="none"
    }
})

mainHome.addEventListener("click",()=>{
    mainHome.style.backgroundImage="url(images/home1.PNG)"
    containerHome.style.display="block"
    mainHot.style.backgroundImage="url(images/hot.png)"
    containerHot.style.display="none"
    mainSub.style.backgroundImage="url(images/sub.png)"
    containerSub.style.display="none"
    mainStorage.style.backgroundImage="url(images/storage.png)"
    containerStorage.style.display="none"
})

mainHot.addEventListener("click",()=>{
    mainHome.style.backgroundImage="url(images/home.PNG)"
    containerHome.style.display="none"
    mainHot.style.backgroundImage="url(images/hot1.png)"
    containerHot.style.display="block"
    mainSub.style.backgroundImage="url(images/sub.png)"
    containerSub.style.display="none"
    mainStorage.style.backgroundImage="url(images/storage.png)"
    containerStorage.style.display="none"
})

mainSub.addEventListener("click",()=>{
    mainHome.style.backgroundImage="url(images/home.PNG)"
    containerHome.style.display="none"
    mainHot.style.backgroundImage="url(images/hot.png)"
    containerHot.style.display="none"
    mainSub.style.backgroundImage="url(images/sub1.png)"
    containerSub.style.display="block"
    mainStorage.style.backgroundImage="url(images/storage.png)"
    containerStorage.style.display="none"
})

mainStorage.addEventListener("click",()=>{
    mainHome.style.backgroundImage="url(images/home.PNG)"
    containerHome.style.display="none"
    mainHot.style.backgroundImage="url(images/hot.png)"
    containerHot.style.display="none"
    mainSub.style.backgroundImage="url(images/sub.png)"
    containerSub.style.display="none"
    mainStorage.style.backgroundImage="url(images/storage1.png)"
    containerStorage.style.display="flex"
})


video.addEventListener("click",()=>{
    stick.style.display="block"
    img.style.backgroundColor="grey"
    playing.style.display="block"
    add.style.display="none"
    late.style.display="none"
    information.style.marginTop="4px"
    time1.style.display="none"
    back1.style.display="none"
})

x.addEventListener("click",()=>{
    stick.style.display="none"
    img.style.backgroundColor="transparent"
    playing.style.display="none"
    add.style.display=""
    late.style.display=""
    information.style.marginTop="0"
    time1.style.display=""
    back1.style.display=""
})

expand.addEventListener("click",()=>{
    stick.style.width="1400px"
    stick.style.height="788px"
    expand.style.display="none"
    contract.style.display="inline-block"
})

contract.addEventListener("click",()=>{
    stick.style.width="390px"
    stick.style.height="220px"
    contract.style.display="none"
    expand.style.display="inline-block"
})

dotBtn.addEventListener("click",()=>{
    dotsM.style.display="none"
})

idClose.addEventListener("click",()=>{
    videoDownVideos.style.display="none"
    VideoDownMore.style.display="none"
    moreVideos.style.display="none"
    VideoDownName.textContent="해당 정보를 더 이상 표시하지 않습니다."
    VideoDownName.style.textAlign="center"
})

late.addEventListener("click",function(e){
    if(late.style.backgroundImage==='url("images/1.PNG")'){
        lateM.textContent="추가됨"
        lateM.style.display="inline-block"
        late.style.backgroundImage="url(images/5.PNG)"
        setTimeout(()=>{
            lateM.style.display="none"
        },2000)
    }else{
        lateM.textContent="삭제됨"
        lateM.style.display="inline-block"
        late.style.backgroundImage="url(images/1.PNG)"
        setTimeout(()=>{
            lateM.style.display="none"
        },2000)
    }
    e.stopPropagation()
})

add.addEventListener("click",function(e){
    if(add.style.backgroundImage==='url("images/2.PNG")'){
        addM.textContent="추가됨"
        addM.style.display="inline-block"
        add.style.backgroundImage="url(images/5.PNG)"
        setTimeout(()=>{
            addM.style.display="none"
        },2000)
    }else{
        addM.textContent="삭제됨"
        addM.style.display="inline-block"
        add.style.backgroundImage="url(images/2.PNG)"
        setTimeout(()=>{
            addM.style.display="none"
        },2000)
    }
    e.stopPropagation()
})

dots.addEventListener("click",function(e){
    dotsM.style.display="inline-block"
    e.stopPropagation()
})

dotsM.addEventListener("click",function(e){
    e.stopPropagation()
})

late1.addEventListener("click",()=>{
    if(late1.style.backgroundImage==='url("images/1.PNG")'){
        late1M.textContent="추가됨"
        late1M.style.display="inline-block"
        late1.style.backgroundImage="url(images/5.PNG)"
        setTimeout(()=>{
            late1M.style.display="none"
        },2000)
    }else{
        late1M.textContent="삭제됨"
        late1M.style.display="inline-block"
        late1.style.backgroundImage="url(images/1.PNG)"
        setTimeout(()=>{
            late1M.style.display="none"
        },2000)
    }
})

add1.addEventListener("click",()=>{
    if(add1.style.backgroundImage==='url("images/2.PNG")'){
        add1M.textContent="추가됨"
        add1M.style.display="inline-block"
        add1.style.backgroundImage="url(images/5.PNG)"
        setTimeout(()=>{
            add1M.style.display="none"
        },2000)
    }else{
        add1M.textContent="삭제됨"
        add1M.style.display="inline-block"
        add1.style.backgroundImage="url(images/2.PNG)"
        setTimeout(()=>{
            add1M.style.display="none"
        },2000)
    }
})

dots1.addEventListener("click",()=>{
    dots1M.style.display="inline-block"
})

dotBtn1.addEventListener("click",()=>{
    dots1M.style.display="none"
})

const aSearchList=document.querySelectorAll(".aSearch")
const spanSearchList=document.querySelectorAll(".spanSearch")
for(let i=0;i<aSearchList.length;i++){
    aSearchList[i].addEventListener("click",()=>{
        aSearchList[i].style.display="none"
        spanSearchList[i].textContent="해당정보를 삭제합니다."
    })
}

VideoDownMore.addEventListener("click",()=>{
    for(let i=15; i<20; i++){
        const div=document.createElement('div')
        div.setAttribute('id',`video${i}`)
        moreVideos.appendChild(div)
    }
    VideoDownMore.style.display="none"
})