const memo=document.querySelector('#memo')
const addMemo=document.querySelector('#add-memo')

addMemo.addEventListener('click',()=>{
    const li=document.createElement('li')
    const div=document.createElement('div')
    const form=document.createElement('form')
    const textarea=document.createElement('textarea')
    const button=document.createElement('button')
    const delbtn=document.createElement('a')
    const changeBtn=document.createElement('button')
    textarea.setAttribute('placeholder','메모입력')
    form.appendChild(textarea)
    form.appendChild(button)
    button.textContent='입력'
    div.appendChild(form)
    changeBtn.setAttribute('id','changeBtn')
    li.appendChild(delbtn)
    li.appendChild(div)
    li.appendChild(changeBtn)
    changeBtn.textContent='수정'
    memo.appendChild(li) //it means ul tag from html

    button.addEventListener('click',(e)=>{
        e.preventDefault()
        form.style.zIndex='-1'
        textarea.value=textarea.value.replace(/(?:\r\n|\r|\n)/g, '<br/>');
        div.innerHTML=textarea.value
        delbtn.style.display='block'
        changeBtn.style.display='block'

    })

    changeBtn.addEventListener('click',()=>{
        form.style.zIndex='2'
        textarea.value=div.textContent
        delbtn.style.display='none'
        changeBtn.style.display='none'
    })
})