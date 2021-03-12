const form=document.querySelector('#form')
const input=document.querySelector('#input')
const image=document.querySelector('#image')
const naming=document.querySelector('#naming')
const address=document.querySelector('#address')
const followers=document.querySelector('#followers')
const follwings=document.querySelector('#follwings')
const reposCount=document.querySelector('#reposCount')
const introduction=document.querySelector('#introduction')
const reposList=document.querySelector('#reposList')
const reposName=document.querySelector('#reposName')

async function getUser(user){
    const resp=await fetch(`https://api.github.com/users/${user}`)
    const respData= await resp.json()
    
    return respData
}

async function getRepos(user){
    const resp=await fetch(`https://api.github.com/users/${user}/repos`)
    const respData= await resp.json()

    return respData
}

form.addEventListener('submit',async(e)=>{
    e.preventDefault()
    if(!input.value){
        alert('Search a Github User')
    }else{
        const user= await getUser(input.value)
        if(!user.login){
            alert(`${input.value} does no exist`)
        }else{
            const repos=await getRepos(input.value)
            image.style.backgroundImage=`url(${user.avatar_url})`
            naming.textContent=user.login
            address.setAttribute('href',user.html_url)
            address.textContent=user.html_url
            if(user.bio===null){
                introduction.textContent='There is no introduction'
            }else{
                introduction.innerHTML=user.bio
            }
            followers.textContent=`${user.followers} Followers`
            follwings.textContent=`${user.following} Follwoings`
            reposCount.textContent=`${user.public_repos} Repos`
            reposName.textContent='Repositories:'
            while (reposList.hasChildNodes()) {
                reposList.removeChild(reposList.firstChild)
            }
            if(repos.length===0){
                reposList.textContent='There is no repository'
            }else{
                for(let i=0;i<repos.length;i++){
                    const li=document.createElement('li')
                    const a=document.createElement('a')
                    a.textContent=repos[i].name
                    a.setAttribute('href',repos[i].html_url)
                    li.appendChild(a)
                    reposList.appendChild(li)
                }
            }
            input.value=''
        }
    }
})
input.value='ho-s'