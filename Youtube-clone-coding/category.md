## Category
왼쪽에 보이는 홈, 인기, 구독 등의 바를 카테고리라고 명명했습니다.  
<br>

### Gradient
---
![gradient](/readmeimages/category1.PNG)  
왼쪽 위에 보이는 버튼에 `@keyframe`효과를 넣어 클릭하고 있을 때 색이 변하도록 설정하였습니다.
```css
@keyframes gradient {
    0% {
        background: radial-gradient(circle at center, #f5f5f5 0%, #fff 0%, #fff 100%);
    }
    25% {
        background: radial-gradient(circle at center, #eee 24%, #fff 25%, #fff 100%);
    }
    50% {
        background: radial-gradient(circle at center, #e0e0e0 49%, #fff 50%, #fff 100%);
    }
    75% {
        background: radial-gradient(circle at center, #bdbdbd 74%, #fff 75%, #fff 100%);
    }
    100% {
        background: radial-gradient(circle at center, #9e9e9e 99%, #fff 100%, #fff 100%);
    }
}

#header-category:active{
    animation: gradient 100ms;
    background-color: #9e9e9e; /*색이 변하는 것이 끝난 후에 색깔을 유지하도록 설정*/
}
```
<br>

### When clicked
---
아래 사진의 카테고리 바를 클릭했을 때 숨겨져있던 창이 뜨도록 설정했습니다.  
![clicked](/readmeimages/category2.PNG)

```javascript
document.querySelector("#header-category").addEventListener("click",()=>{
    if(document.getElementById("hidden").style.display==="none"){ 
        document.getElementById("hidden").style.display="inline-block"
        document.getElementById("main-category").style.display="none"
    } else{
        document.getElementById("main-category").style.display="inline-block"
        document.getElementById("hidden").style.display="none"
    }
})
```

위 표시된 버튼을 `#header-category`, 숨겨져있던 창들을 `#hidden`,  
원래 표시되던 홈, 인기, 구독 등의 버튼이 있던 공간을 `#main-category`라고  했습니다.  
<br>

### Scrollbar
---
![hover](/readmeimages/category3.PNG)  
위의 보이는 사진처럼 마우스를 올렸을 때만 옆의 스크롤바가 보여지게 했으며, 이는  
`:hover`과 `overflow-y`의 기능을 사용하였습니다.  
또한, 스크롤바를 꾸미기 위해 `-webkit-scrollbar` 기능을 사용하였습니다.
```css
#hidden{
    width: 242px;
    margin-top: 0px;
    overflow-y:hidden;
    overflow-x:none;
    height: 100%;
}

#hidden::-webkit-scrollbar{
    width:10px;
    height: 10px;
}

#hidden::-webkit-scrollbar-thumb{
    background-color: #aaa;
}

#hidden:hover{
    overflow-y: scroll;
    overflow-x: hidden;
}
```