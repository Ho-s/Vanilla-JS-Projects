document.querySelector("#header-category").addEventListener("click",()=>{
    if(document.getElementById("hidden").style.display==="none"){ 
        document.getElementById("hidden").style.display="inline-block"
        document.getElementById("main-category").style.display="none"
    } else{
        document.getElementById("main-category").style.display="inline-block"
        document.getElementById("hidden").style.display="none"
    }
})

document.querySelector("#input").addEventListener("click",()=>{
    document.getElementById("search").style.display="inline-block"
})

document.querySelector("#header-create").addEventListener("click",()=>{
    document.getElementById("header-create-space").style.display="inline-block"
})

document.querySelector("#header-apps").addEventListener("click",()=>{
    document.getElementById("header-apps-space").style.display="inline-block"
})

document.querySelector("#header-alert").addEventListener("click",()=>{
    document.getElementById("header-alert-space").style.display="inline-block"
})

document.querySelector("#header-login").addEventListener("click",()=>{
    document.getElementById("header-login-space").style.display="inline-block"
})

document.querySelector("#main-home").addEventListener("click",()=>{
    document.getElementById("main-home").style.backgroundImage="url(images/home1.PNG)"
    document.getElementById("container-home").style.display="block"
    document.getElementById("main-hot").style.backgroundImage="url(images/hot.png)"
    document.getElementById("container-hot").style.display="none"
    document.getElementById("main-sub").style.backgroundImage="url(images/sub.png)"
    document.getElementById("container-sub").style.display="none"
    document.getElementById("main-storage").style.backgroundImage="url(images/storage.png)"
    document.getElementById("container-storage").style.display="none"
})

document.querySelector("#main-hot").addEventListener("click",()=>{
    document.getElementById("main-home").style.backgroundImage="url(images/home.PNG)"
    document.getElementById("container-home").style.display="none"
    document.getElementById("main-hot").style.backgroundImage="url(images/hot1.png)"
    document.getElementById("container-hot").style.display="block"
    document.getElementById("main-sub").style.backgroundImage="url(images/sub.png)"
    document.getElementById("container-sub").style.display="none"
    document.getElementById("main-storage").style.backgroundImage="url(images/storage.png)"
    document.getElementById("container-storage").style.display="none"
})

document.querySelector("#main-sub").addEventListener("click",()=>{
    document.getElementById("main-home").style.backgroundImage="url(images/home.PNG)"
    document.getElementById("container-home").style.display="none"
    document.getElementById("main-hot").style.backgroundImage="url(images/hot.png)"
    document.getElementById("container-hot").style.display="none"
    document.getElementById("main-sub").style.backgroundImage="url(images/sub1.png)"
    document.getElementById("container-sub").style.display="block"
    document.getElementById("main-storage").style.backgroundImage="url(images/storage.png)"
    document.getElementById("container-storage").style.display="none"
})

document.querySelector("#main-storage").addEventListener("click",()=>{
    document.getElementById("main-home").style.backgroundImage="url(images/home.PNG)"
    document.getElementById("container-home").style.display="none"
    document.getElementById("main-hot").style.backgroundImage="url(images/hot.png)"
    document.getElementById("container-hot").style.display="none"
    document.getElementById("main-sub").style.backgroundImage="url(images/sub.png)"
    document.getElementById("container-sub").style.display="none"
    document.getElementById("main-storage").style.backgroundImage="url(images/storage1.png)"
    document.getElementById("container-storage").style.display="flex"
})

document.querySelector("#video").addEventListener("click",()=>{
    document.getElementById("stick").style.display="block"
    document.getElementById("img").style.backgroundColor="grey"
    document.getElementById("playing").style.display="block"
    document.getElementById("add").style.display="none"
    document.getElementById("late").style.display="none"
    document.getElementById("information").style.marginTop="4px"
    document.getElementById("time1").style.display="none"
    document.getElementById("back1").style.display="none"
})

document.querySelector("#x").addEventListener("click",()=>{
    document.getElementById("stick").style.display="none"
    document.getElementById("img").style.backgroundColor="transparent"
    document.getElementById("playing").style.display="none"
    document.getElementById("add").style.display=""
    document.getElementById("late").style.display=""
    document.getElementById("information").style.marginTop="0"
    document.getElementById("time1").style.display=""
    document.getElementById("back1").style.display=""
})

document.querySelector("#expand").addEventListener("click",()=>{
    document.getElementById("stick").style.width="1400px"
    document.getElementById("stick").style.height="788px"
    document.getElementById("expand").style.display="none"
    document.getElementById("contract").style.display="inline-block"
})

document.querySelector("#contract").addEventListener("click",()=>{
    document.getElementById("stick").style.width="390px"
    document.getElementById("stick").style.height="220px"
    document.getElementById("contract").style.display="none"
    document.getElementById("expand").style.display="inline-block"
})

document.querySelector("#main-videos").addEventListener("click",()=>{
    document.getElementById("search").style.display="none"
    document.getElementById("header-create-space").style.display="none"
    document.getElementById("header-apps-space").style.display="none"
    document.getElementById("header-alert-space").style.display="none"
    document.getElementById("header-login-space").style.display="none"
})

document.querySelector("#dot-btn").addEventListener("click",()=>{
    document.getElementById("dotsM").style.display="none"
})

document.querySelector("#close").addEventListener("click",()=>{
    document.getElementById("video-down-videos").style.display="none"
    document.getElementById("video-down-more").style.display="none"
    document.getElementById("more-videos").style.display="none"
    document.getElementById("video-down-name").textContent="해당 정보를 더 이상 표시하지 않습니다."
    document.getElementById("video-down-name").style.textAlign="center"
})

document.querySelector("#late").addEventListener("click",()=>{
    if(document.getElementById("late").style.backgroundImage==='url("images/1.PNG")'){
        document.getElementById("lateM").textContent="추가됨"
        document.getElementById("lateM").style.display="inline-block"
        document.getElementById("late").style.backgroundImage="url(images/5.PNG)"
        setTimeout(()=>{
            document.getElementById("lateM").style.display="none"
        },2000)
    }else{
        document.getElementById("lateM").textContent="삭제됨"
        document.getElementById("lateM").style.display="inline-block"
        document.getElementById("late").style.backgroundImage="url(images/1.PNG)"
        setTimeout(()=>{
            document.getElementById("lateM").style.display="none"
        },2000)
    }
})

document.querySelector("#add").addEventListener("click",()=>{
    if(document.getElementById("add").style.backgroundImage==='url("images/2.PNG")'){
        document.getElementById("addM").textContent="추가됨"
        document.getElementById("addM").style.display="inline-block"
        document.getElementById("add").style.backgroundImage="url(images/5.PNG)"
        setTimeout(()=>{
            document.getElementById("addM").style.display="none"
        },2000)
    }else{
        document.getElementById("addM").textContent="삭제됨"
        document.getElementById("addM").style.display="inline-block"
        document.getElementById("add").style.backgroundImage="url(images/2.PNG)"
        setTimeout(()=>{
            document.getElementById("addM").style.display="none"
        },2000)
    }
})

document.querySelector("#dots").addEventListener("click",()=>{
    document.getElementById("dotsM").style.display="inline-block"
})

document.querySelector("#late1").addEventListener("click",()=>{
    if(document.getElementById("late1").style.backgroundImage==='url("images/1.PNG")'){
        document.getElementById("late1M").textContent="추가됨"
        document.getElementById("late1M").style.display="inline-block"
        document.getElementById("late1").style.backgroundImage="url(images/5.PNG)"
        setTimeout(()=>{
            document.getElementById("late1M").style.display="none"
        },2000)
    }else{
        document.getElementById("late1M").textContent="삭제됨"
        document.getElementById("late1M").style.display="inline-block"
        document.getElementById("late1").style.backgroundImage="url(images/1.PNG)"
        setTimeout(()=>{
            document.getElementById("late1M").style.display="none"
        },2000)
    }
})

document.querySelector("#add1").addEventListener("click",()=>{
    if(document.getElementById("add1").style.backgroundImage==='url("images/2.PNG")'){
        document.getElementById("add1M").textContent="추가됨"
        document.getElementById("add1M").style.display="inline-block"
        document.getElementById("add1").style.backgroundImage="url(images/5.PNG)"
        setTimeout(()=>{
            document.getElementById("add1M").style.display="none"
        },2000)
    }else{
        document.getElementById("add1M").textContent="삭제됨"
        document.getElementById("add1M").style.display="inline-block"
        document.getElementById("add1").style.backgroundImage="url(images/2.PNG)"
        setTimeout(()=>{
            document.getElementById("add1M").style.display="none"
        },2000)
    }
})

document.querySelector("#dots1").addEventListener("click",()=>{
    document.getElementById("dots1M").style.display="inline-block"
})

document.querySelector("#dot-btn1").addEventListener("click",()=>{
    document.getElementById("dots1M").style.display="none"
})

document.querySelector("#searcha1").addEventListener("click",()=>{
    document.getElementById("searcha1").style.display="none"
    document.getElementById("searchs1").textContent="해당정보를 삭제합니다."
})
document.querySelector("#searcha2").addEventListener("click",()=>{
    document.getElementById("searcha2").style.display="none"
    document.getElementById("searchs2").textContent="해당정보를 삭제합니다."
})
document.querySelector("#searcha3").addEventListener("click",()=>{
    document.getElementById("searcha3").style.display="none"
    document.getElementById("searchs3").textContent="해당정보를 삭제합니다."
})
document.querySelector("#searcha4").addEventListener("click",()=>{
    document.getElementById("searcha4").style.display="none"
    document.getElementById("searchs4").textContent="해당정보를 삭제합니다."
})
document.querySelector("#searcha5").addEventListener("click",()=>{
    document.getElementById("searcha5").style.display="none"
    document.getElementById("searchs5").textContent="해당정보를 삭제합니다."
})
document.querySelector("#searcha6").addEventListener("click",()=>{
    document.getElementById("searcha6").style.display="none"
    document.getElementById("searchs6").textContent="해당정보를 삭제합니다."
})
document.querySelector("#searcha7").addEventListener("click",()=>{
    document.getElementById("searcha7").style.display="none"
    document.getElementById("searchs7").textContent="해당정보를 삭제합니다."
})

document.querySelector("#video-down-more").addEventListener("click",()=>{
    document.getElementById("video15").style.display="inline-block"
    document.getElementById("video16").style.display="inline-block"
    document.getElementById("video17").style.display="inline-block"
    document.getElementById("video18").style.display="inline-block"
    document.getElementById("video19").style.display="inline-block"
    document.getElementById("video-down-more").style.display="none"
})