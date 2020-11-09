# Update History

* 20201109
    * input창 반응형으로 변경
    * 원하는 요소 외부 요소 클릭시 창 없애기 오류 수정
    ```js
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
    ```