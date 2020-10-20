## Video
![video1](/readmeimages/video1.png)  
비디오는 위 사진처럼 꾸며졌으며, `:hover`를 이용해 아래처럼 몇 개의 버튼을 구현해놓았습니다.  
![video2](/readmeimages/video2.png)  
<br>

---

비디오를 클릭했을 때 `javascript`를 이용해 `background-color`을 설정해주었으며,
`css`의 `background-blen-mode:multiply`로 설정해 화면이 어둡게 되는 효과를 주었습니다.

```javascript
document.querySelector("#video").addEventListener("click",()=>{
    document.getElementById("img").style.backgroundColor="grey"
```

```css
#img{
    background-blend-mode: multiply;
}
```
![video3](/readmeimages/video3.PNG)  
<br>

---

비디오는 `html`의 `<video>`태그를 이용하였으며, `css`의 `position:fixed`를 이용해  
화면의 오른쪽 아래에 붙도록 설정해두었습니다.

```html
<video controls>
    <source src="videos/video.mp4">
</video>
```
```css
#stick{
    width: 390px;
    height: 220px;
    position: fixed;
    right: 50px;
    bottom: 20px;
}
```
![video4](/readmeimages/video4.PNG)