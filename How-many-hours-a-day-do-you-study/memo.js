const memo = document.querySelector('#memo')
const addMemo = document.querySelector('#add-memo')

let memoList = []
function addMemoEvent() {
    addMemo.addEventListener('click', () => {
        const li = document.createElement('li')
        const div = document.createElement('div')
        const form = document.createElement('form')
        const textarea = document.createElement('textarea')
        const button = document.createElement('b')
        const delbtn = document.createElement('a')
        textarea.setAttribute('placeholder', '메모입력...\nSave(V icon) is required')
        form.appendChild(textarea)
        li.appendChild(delbtn)
        form.appendChild(button)
        div.appendChild(form)
        li.appendChild(div)
        if (memoList.length === 0) {
            li.id = 0
        } else {
            li.id = Number(memoList[memoList.length - 1].id) + 1
        }
        let contentsStorage = {
            id: li.id,
            contents: '',
        }
        memoList.push(contentsStorage)
        localStorage.setItem('memoList', JSON.stringify(memoList))
        memo.appendChild(li)

        button.addEventListener('click', (e) => {
            for (let i = 0; i < memoList.length; i++) {
                if (memoList[i].id === e.target.parentNode.parentNode.parentNode.id) {
                    contentsStorage = {
                        id: memoList[i].id,
                        contents: e.target.parentNode.childNodes[0].value,
                    }
                    contentsStorage.contents = contentsStorage.contents.replace("\r\n","<br>");
                    memoList.splice(i, 1)
                    memoList.push(contentsStorage)
                    memoList.sort((a, b) => {
                        return a.id - b.id
                    })
                }
            }

            localStorage.setItem('memoList', JSON.stringify(memoList))
        })

        delbtn.addEventListener('click', (e) => {
            const it = e.target.parentNode
            memo.removeChild(it)
            const cleanList = memoList.filter(function(that) {
                return that.id !== it.id
            })
            memoList = cleanList
            localStorage.setItem('memoList', JSON.stringify(memoList))
        })
    })
}

function loadMemo() {
    const loading = localStorage.getItem('memoList')
    const parseLoaded = JSON.parse(loading)
    if (parseLoaded) {
        memoList = parseLoaded
        for (let i = 0; i < memoList.length; i++) {
            const li = document.createElement('li')
            const div = document.createElement('div')
            const form = document.createElement('form')
            const textarea = document.createElement('textarea')
            const button = document.createElement('b')
            const delbtn = document.createElement('a')
            textarea.setAttribute('placeholder', '메모입력...\nSave(V icon) is required')
            li.id = memoList[i].id
            textarea.value = memoList[i].contents
            form.appendChild(textarea)
            li.appendChild(delbtn)
            form.appendChild(button)
            div.appendChild(form)
            li.appendChild(div)
            memo.appendChild(li)

            button.addEventListener('click', (e) => {
                for (let i = 0; i < memoList.length; i++) {
                    if (memoList[i].id === e.target.parentNode.parentNode.parentNode.id) {
                        contentsStorage = {
                            id: memoList[i].id,
                            contents: e.target.parentNode.childNodes[0].value,
                        }
                        contentsStorage.contents = contentsStorage.contents.replace("\r\n","<br>");
                        memoList.splice(i, 1)
                        memoList.push(contentsStorage)
                        memoList.sort((a, b) => {
                            return a.id - b.id
                        })

                    }
                }
                localStorage.setItem('memoList', JSON.stringify(memoList))
            })

            delbtn.addEventListener('click', (e) => {
                const it = e.target.parentNode
                memo.removeChild(it)
                const cleanList = memoList.filter(function(that) {
                    return that.id !== it.id
                })
                memoList = cleanList
                localStorage.setItem('memoList', JSON.stringify(memoList))
            })
        }
    }
}


function init() {
    addMemoEvent()
    loadMemo()
}

init()