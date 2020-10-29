const image=document.querySelector(".bottom-high")
const imageName=document.querySelector(".name")
const heart=document.querySelector(".heart")
const ul=document.querySelector("#mid-low")

let heartNum=0
let mealsList=[]
async function useGetRandomMeal(){
    const resp = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    const respData = await resp.json()
    let randomMeal= respData.meals[0]

    function getRandomMeal(){
        image.style.backgroundImage=`url(${randomMeal.strMealThumb})`
        imageName.textContent=randomMeal.strMeal
        
        if(randomMeal.strSource){
            image.setAttribute('onclick',`window.open("${randomMeal.strSource}")`)
            imageName.setAttribute('onclick',`window.open("${randomMeal.strSource}")`)
        }else{
            image.setAttribute('onclick',`alert("I'm sorry, there is no linked website")`)
            imageName.setAttribute('onclick',`alert("I'm sorry, there is no linked website")`)
        }
        heart.style.backgroundImage="url(./images/heart.png)"
        heartNum=0
    }

    async function getRandomMeal1(){
        const resp1 = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        const respData1 = await resp1.json()
        const randomMeal1= respData1.meals[0]
        image.style.backgroundImage=`url(${randomMeal1.strMealThumb})`
        imageName.textContent=randomMeal1.strMeal
        
        if(randomMeal1.strSource){
            image.setAttribute('onclick',`window.open("${randomMeal1.strSource}")`)
            imageName.setAttribute('onclick',`window.open("${randomMeal1.strSource}")`)
        }else{
            image.setAttribute('onclick',`alert("I'm sorry, there is no linked website")`)
            imageName.setAttribute('onclick',`alert("I'm sorry, there is no linked website")`)
        }
        heart.style.backgroundImage="url(./images/heart.png)"
        heartNum=0
        randomMeal=randomMeal1
    }

    function clickRandom(){
        document.querySelector("#inside").addEventListener("click",function(event){
            getRandomMeal1()
            event.stopPropagation()
        })
    }
    
    function loadMeals(){
        const meals=localStorage.getItem('meals')
        if(meals!==null){
            parsedMeals=JSON.parse(meals)
            mealsList=parsedMeals
            for(i in parsedMeals){
                // getMealbyId(mealsList[i].id)
                const li=document.createElement('li')
                const div=document.createElement('div')
                const span=document.createElement('span')
                li.id=mealsList[i].id
                div.style.backgroundImage=mealsList[i].backgroundImage
                span.textContent=mealsList[i].name
                li.appendChild(div)
                li.appendChild(span)
                ul.appendChild(li)
                mealsList[i].heartNum=1
                localStorage.setItem('meals',JSON.stringify(mealsList))
            }
        }
    }

    function heartClick(){
        heart.addEventListener("click",()=>{
            if(heartNum===0){
                heart.style.backgroundImage="url(./images/heart1.png)"
                const li=document.createElement('li')
                const div=document.createElement('div')
                const span=document.createElement('span')
                li.id=randomMeal.idMeal
                div.style.backgroundImage=`url(${randomMeal.strMealThumb})`
                span.textContent=randomMeal.strMeal
                li.appendChild(div)
                li.appendChild(span)
                ul.appendChild(li)
                heartNum++
                meals={
                    id:randomMeal.idMeal,
                    name:randomMeal.strMeal,
                    heartNum:heartNum,
                    backgroundImage:`url(${randomMeal.strMealThumb})`
                }
                mealsList.push(meals)
                localStorage.setItem('meals',JSON.stringify(mealsList))
            }
            else if(heartNum===1){
                heart.style.backgroundImage="url(./images/heart.png)"
                heartNum--
                const parent=document.getElementById("mid-low")
                const child=document.getElementById(randomMeal.idMeal)
                parent.removeChild(child)
                const cleanList=mealsList.filter(function(List){
                    return List.id!==mealsList[mealsList.length-1].id
                })
                mealsList=cleanList
                localStorage.setItem('meals',JSON.stringify(mealsList))
            }else if(heartNum===2){
                heart.style.backgroundImage="url(./images/heart1.png)"
                const li=document.createElement('li')
                const div=document.createElement('div')
                const span=document.createElement('span')
                li.id=image.getAttribute('name')
                div.style.backgroundImage=`url(${image.getAttribute('id')})`
                span.textContent=imageName.textContent
                li.appendChild(div)
                li.appendChild(span)
                ul.appendChild(li)
                heartNum++
                meals={
                    id:image.getAttribute('name'),
                    name:imageName.textContent,
                    heartNum:heartNum,
                    backgroundImage:`url(${image.getAttribute('id')})`
                }
                mealsList.push(meals)
                localStorage.setItem('meals',JSON.stringify(mealsList))
            }else if(heartNum===3){
                heart.style.backgroundImage="url(./images/heart.png)"
                heartNum--
                const parent=document.getElementById("mid-low")
                const child=document.getElementById(image.getAttribute('name'))
                parent.removeChild(child)
                const cleanList=mealsList.filter(function(List){
                    return List.id!==image.getAttribute('name')
                })
                mealsList=cleanList
                localStorage.setItem('meals',JSON.stringify(mealsList))
            }
            liClick()
        })
    }

    async function liClick(){
        const clickList=document.querySelectorAll('li')
        for(let i=0;i<clickList.length;i++){
            clickList[i].addEventListener("click",async(e)=>{
                const meal= await getMealbyId(e.target.parentNode.id)
                image.style.backgroundImage=`url(${meal.strMealThumb})`
                imageName.textContent=meal.strMeal
                heart.style.backgroundImage="url(./images/heart1.png)"
                image.setAttribute('name',meal.idMeal)
                image.setAttribute('id',meal.strMealThumb)
                heartNum=3
                if(meal.strSource){
                    image.setAttribute('onclick',`window.open("${meal.strSource}")`)
                    imageName.setAttribute('onclick',`window.open("${meal.strSource}")`)
                }else{
                    image.setAttribute('onclick',`alert("I'm sorry, there is no linked website")`)
                    imageName.setAttribute('onclick',`alert("I'm sorry, there is no linked website")`)
                }
            })
        }
    }
    getRandomMeal()
    clickRandom()
    loadMeals()
    heartClick()
    liClick()
}

async function getMealbyId(id){
    const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const respData = await resp.json();
    const meal=respData.meals[0]
    return meal
}

async function getMealsBySearch(term){
    const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
    const respData = await resp.json()
    const meals= respData.meals
    return meals
}


const input=document.querySelector("#input")
const searchButton=document.querySelector("#button")
function search(){
    searchButton.addEventListener("click",async(e)=>{
        const meals=await getMealsBySearch(input.value)
        if(!input.value){
            alert("Please enter something")
        }else{
            if(meals===null){
                alert("There is no result")
            }else{
                const result=document.querySelector("#search-result")
                while(result.hasChildNodes()){
                    result.removeChild(result.firstChild)
                }
                for(let i=0;i<meals.length;i++){
                    const li=document.createElement('li')
                    const bottomHigh=document.createElement('div')
                    const bottomLow=document.createElement('div')
                    const name=document.createElement('div')
                    const theOtherHeart=document.createElement('div')
                    const space=document.createElement('div')
                    bottomHigh.setAttribute('class','bottom-high')
                    bottomHigh.setAttribute('id',i+1)
                    bottomLow.setAttribute('class','bottom-low')
                    name.setAttribute('class','name')
                    name.setAttribute('id',i+1*100)
                    theOtherHeart.setAttribute('class','the-other-heart')
                    space.setAttribute('class','space')
                    bottomHigh.style.backgroundImage=`url(${meals[i].strMealThumb})`
                    name.textContent=meals[i].strMeal
                    theOtherHeart.style.backgroundImage='url("./images/heart.png")'
                    bottomLow.appendChild(name)
                    bottomLow.appendChild(theOtherHeart)
                    space.appendChild(bottomHigh)
                    space.appendChild(bottomLow)
                    li.appendChild(space)
                    result.appendChild(li)
                }
            }
        }
        sth()
    })

    const hearts=document.getElementsByClassName(".the-other-heart")

    Array.from(hearts).forEach(function(heart){
        heart.addEventListener('click',function(e){
            console.log("sht")
        })
    })
    // heart.addEventListener("click",()=>{
    //     if(heartNum===0){
    //         heart.style.backgroundImage="url(./images/heart1.png)"
    //         const li=document.createElement('li')
    //         const div=document.createElement('div')
    //         const span=document.createElement('span')
    //         li.id=randomMeal.idMeal
    //         div.style.backgroundImage=`url(${randomMeal.strMealThumb})`
    //         span.textContent=randomMeal.strMeal
    //         li.appendChild(div)
    //         li.appendChild(span)
    //         ul.appendChild(li)
    //         heartNum++
    //         meals={
    //             id:randomMeal.idMeal,
    //             name:randomMeal.strMeal,
    //             heartNum:heartNum,
    //             backgroundImage:`url(${randomMeal.strMealThumb})`
    //         }
    //         mealsList.push(meals)
    //         localStorage.setItem('meals',JSON.stringify(mealsList))
    //     }
    //     else if(heartNum===1){
    //         heart.style.backgroundImage="url(./images/heart.png)"
    //         heartNum--
    //         const parent=document.getElementById("mid-low")
    //         const child=document.getElementById(randomMeal.idMeal)
    //         parent.removeChild(child)
    //         const cleanList=mealsList.filter(function(List){
    //             return List.id!==mealsList[mealsList.length-1].id
    //         })
    //         mealsList=cleanList
    //         localStorage.setItem('meals',JSON.stringify(mealsList))
    //     }
    // })
}

async function sth(){
    const meals=await getMealsBySearch(input.value)
    for(let i=0;i<meals.length;i++){
        if(meals[i].strSource){
            document.getElementById(`${i+1}`).setAttribute('onclick',`window.open("${meals[i].strSource}")`)
            document.getElementById(`${i+1*100}`).setAttribute('onclick',`window.open("${meals[i].strSource}")`)
        }else{
            document.getElementById(`${i+1}`).setAttribute('onclick',`alert("I'm sorry, there is no linked website")`)
            document.getElementById(`${i+1*100}`).setAttribute('onclick',`alert("I'm sorry, there is no linked website")`)
        }
    }
}


// window.onclick = e => {
//     console.log(e.target);  // to get the element
//     console.log(e.target.tagName);  // to get the element tag name alone
// }
// //클릭 타겟을 얻는 거

function init(){
    useGetRandomMeal()
    search()
}

init()