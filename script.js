const image=document.querySelector("#bottom-high")
const imageName=document.querySelector("#name")
const heart=document.querySelector("#heart")
const ul=document.querySelector("#mid-low")

async function getRandomMeal(){
    const resp = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    const randomMeal = await resp.json()
    image.style.backgroundImage=`url(${randomMeal.meals[0].strMealThumb})`
    imageName.textContent=randomMeal.meals[0].strMeal
    
    if(randomMeal.meals[0].strSource){
        image.setAttribute('onclick',`window.open("${randomMeal.meals[0].strSource}")`)
        imageName.setAttribute('onclick',`window.open("${randomMeal.meals[0].strSource}")`)
    }else{
        image.setAttribute('onclick',`alert("I'm sorry, there is no linked website")`)
        imageName.setAttribute('onclick',`alert("I'm sorry, there is no linked website")`)
    }
    heart.style.backgroundImage="url(./images/heart.png)"
    heartNum=0
}

let heartNum=0
let mealsList=[]
async function useGetRandomMeal(){
    const resp = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    const randomMeal = await resp.json()
    function loadMeals(){
        const meals=localStorage.getItem('meals')
        if(meals!==null){
            parsedMeals=JSON.parse(meals)
            mealsList=parsedMeals
            for(i in parsedMeals){
                getMealbyId(mealsList[i].id)
                const li=document.createElement('li')
                const div=document.createElement('div')
                const span=document.createElement('span')
                li.setAttribute('onclick','liClick(this)')
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
                li.id=randomMeal.meals[0].idMeal
                div.style.backgroundImage=`url(${randomMeal.meals[0].strMealThumb})`
                span.textContent=randomMeal.meals[0].strMeal
                li.appendChild(div)
                li.appendChild(span)
                ul.appendChild(li)
                li.setAttribute('onclick','liClick(this)')
                heartNum++
                meals={
                    id:randomMeal.meals[0].idMeal,
                    name:randomMeal.meals[0].strMeal,
                    heartNum:heartNum,
                    backgroundImage:`url(${randomMeal.meals[0].strMealThumb})`
                }
                mealsList.push(meals)
                localStorage.setItem('meals',JSON.stringify(mealsList))
            }
            else{
                heart.style.backgroundImage="url(./images/heart.png)"
                heartNum--
                const parent=document.getElementById("mid-low")
                const child=document.getElementById(randomMeal.meals[0].strMeal)
                parent.removeChild(child)
                const cleanList=mealsList.filter(function(List){
                    return List.id!==mealsList[mealsList.length-1].id
                })
                mealsList=cleanList
                localStorage.setItem('meals',JSON.stringify(mealsList))
            }
        })
    }
    loadMeals()
    heartClick()
}

function clickRandom(){
    document.querySelector("#inside").addEventListener("click",function(event){
        getRandomMeal()
        event.stopPropagation()
    })
}

function liClick(event){
    console.log(event.target)
    // image.style.backgroundImage=`url(${randomMeal.meals[0].strMealThumb})`
    // imageName.textContent=randomMeal.meals[0].strMeal
    // heart.style.backgroundImage="url(./images/heart1.png)"
    // heartNum=1
}

// window.onclick = e => {
//     console.log(e.target);  // to get the element
//     console.log(e.target.parentNode);  // to get the element tag name alone
// } 


async function getMealbyId(id){
    const meal = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
}

// async function getMealsBySearch(term){
//     const meals = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
// }



function init(){
    getRandomMeal()
    clickRandom()
    useGetRandomMeal()
}

init()