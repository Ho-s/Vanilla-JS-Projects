## Responsive page


```css
#video{
    width: calc(100% / 5 - 16px - 7px);
    height: 302px;
    margin-left: calc(16px / 2);
    margin-right: calc(16px / 2);
    margin-bottom:35px;
    float: left;
}
```
![responsive](/readmeimages/responsive1.PNG)  
기본 비디오 한 칸의 크기는 위와 같으며, 창이 줄어듦에 따라 비디오가 표시되는 개수 등을 조절했습니다.

---

---
```css
@media screen and (max-width:1800px){
    #video,
    #video1,
    #video2,
    #video3,
    #video4,
    #video5,
    #video6,
    #video7,
    #video10,
    #video11,
    #video12,
    #video13,
    #video15,
    #video16,
    #video17,
    #video18{
        width: calc(100% / 4 - 16px - 7px);
    }
    #container-home{
        max-width: calc(4 * 365px + 16px);
    }

    #video8,
    #video9,
    #video14,
    #video19{
        width:0;
        height: 0; 
        border:0;
        margin:0;
    }
}
```
![responsive1](/reademeimages/responsive3.PNG)  
화면 크기가 1800px이하일 때는 각 줄에 동영상 두개를 삭제하여 한 줄에 동영상이 4개만 뜨도록 설정했으며, 그 아래의 픽셀로는 동영상들이 밀리도록 하여 스크롤바를 내리면 보이도록 설정했으며, 그 코드들은 제외하였습니다.

---

```css
@media screen and (max-width:808px){
    #main-category{
        width: 0;
    }
}
```
![responsive2](/reademeimages/responsive2.PNG)  
왼쪽의 홈, 인기 등의 카테고리를 표시하는 창은 808픽셀 이하일때 삭제되도록 하였습니다.