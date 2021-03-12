<<<<<<< HEAD
const image = document.querySelector(".bottom-high")
const imageName = document.querySelector(".name")
const heart = document.querySelector(".heart")
const ul = document.querySelector("#mid-low")

let heartNum = 0
let mealsList = []
async function useGetRandomMeal() {
    const resp = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    const respData = await resp.json()
    let randomMeal = respData.meals[0]

    function getRandomMeal() {
        image.style.backgroundImage = `url(${randomMeal.strMealThumb})`
        imageName.textContent = randomMeal.strMeal

        if (randomMeal.strSource) {
            image.setAttribute('onclick', `window.open("${randomMeal.strSource}")`)
            imageName.setAttribute('onclick', `window.open("${randomMeal.strSource}")`)
        } else {
            image.setAttribute('onclick', `alert("I'm sorry, there is no linked website")`)
            imageName.setAttribute('onclick', `alert("I'm sorry, there is no linked website")`)
        }
        heart.style.backgroundImage = "url(./images/heart.png)"
        heartNum = 0
        for (let v = 0; v < mealsList.length; v++) {
            if (randomMeal.idMeal === mealsList[v].id) {
                heart.style.backgroundImage = 'url("./images/heart1.png")'
                heart.setAttribute('id', 'styled')
                heartNum = 1
=======
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
        for(let v=0; v<mealsList.length;v++){
            if(randomMeal.idMeal===mealsList[v].id){
                heart.style.backgroundImage='url("./images/heart1.png")'
                heart.setAttribute('id','styled')
                heartNum=1
>>>>>>> b155891cad05b00ad7d3396a0127455727cd52b0
            }
        }
    }

<<<<<<< HEAD
    async function getRandomMeal1() {
        const resp1 = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        const respData1 = await resp1.json()
        const randomMeal1 = respData1.meals[0]
        image.style.backgroundImage = `url(${randomMeal1.strMealThumb})`
        imageName.textContent = randomMeal1.strMeal

        if (randomMeal1.strSource) {
            image.setAttribute('onclick', `window.open("${randomMeal1.strSource}")`)
            imageName.setAttribute('onclick', `window.open("${randomMeal1.strSource}")`)
        } else {
            image.setAttribute('onclick', `alert("I'm sorry, there is no linked website")`)
            imageName.setAttribute('onclick', `alert("I'm sorry, there is no linked website")`)
        }
        heart.style.backgroundImage = "url(./images/heart.png)"
        heartNum = 0
        randomMeal = randomMeal1
        for (let v = 0; v < mealsList.length; v++) {
            if (randomMeal1.idMeal === mealsList[v].id) {
                heart.style.backgroundImage = 'url("./images/heart1.png")'
                heart.setAttribute('id', 'styled')
                heartNum = 1
=======
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
        for(let v=0; v<mealsList.length;v++){
            if(randomMeal1.idMeal===mealsList[v].id){
                heart.style.backgroundImage='url("./images/heart1.png")'
                heart.setAttribute('id','styled')
                heartNum=1
>>>>>>> b155891cad05b00ad7d3396a0127455727cd52b0
            }
        }
    }

<<<<<<< HEAD
    function clickRandom() {
        document.querySelector("#inside").addEventListener("click", function (event) {
=======
    function clickRandom(){
        document.querySelector("#inside").addEventListener("click",function(event){
>>>>>>> b155891cad05b00ad7d3396a0127455727cd52b0
            getRandomMeal1()
            event.stopPropagation()
        })
    }
<<<<<<< HEAD

    function loadMeals() {
        const meals = localStorage.getItem('meals')
        if (meals !== null) {
            parsedMeals = JSON.parse(meals)
            mealsList = parsedMeals
            for (i in parsedMeals) {
                const li = document.createElement('li')
                const div = document.createElement('div')
                const span = document.createElement('span')
                li.id = mealsList[i].id
                div.style.backgroundImage = mealsList[i].backgroundImage
                span.textContent = mealsList[i].name
                li.appendChild(div)
                li.appendChild(span)
                ul.appendChild(li)
                mealsList[i].heartNum = 1
                localStorage.setItem('meals', JSON.stringify(mealsList))
=======
    
    function loadMeals(){
        const meals=localStorage.getItem('meals')
        if(meals!==null){
            parsedMeals=JSON.parse(meals)
            mealsList=parsedMeals
            for(i in parsedMeals){
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
>>>>>>> b155891cad05b00ad7d3396a0127455727cd52b0
            }
        }
    }

<<<<<<< HEAD
    function heartClick() {
        heart.addEventListener("click", () => {
            if (heartNum === 0) {
                heart.style.backgroundImage = "url(./images/heart1.png)"
                const li = document.createElement('li')
                const div = document.createElement('div')
                const span = document.createElement('span')
                li.id = randomMeal.idMeal
                div.style.backgroundImage = `url(${randomMeal.strMealThumb})`
                span.textContent = randomMeal.strMeal
=======
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
>>>>>>> b155891cad05b00ad7d3396a0127455727cd52b0
                li.appendChild(div)
                li.appendChild(span)
                ul.appendChild(li)
                heartNum++
<<<<<<< HEAD
                meals = {
                    id: randomMeal.idMeal,
                    name: randomMeal.strMeal,
                    heartNum: heartNum,
                    backgroundImage: `url(${randomMeal.strMealThumb})`
                }
                mealsList.push(meals)
                localStorage.setItem('meals', JSON.stringify(mealsList))
            }
            else if (heartNum === 1) {
                heart.style.backgroundImage = "url(./images/heart.png)"
                heartNum--
                const parent = document.getElementById("mid-low")
                const child = document.getElementById(randomMeal.idMeal)
                parent.removeChild(child)
                const cleanList = mealsList.filter(function (List) {
                    return List.id !== randomMeal.idMeal
                })
                mealsList = cleanList
                localStorage.setItem('meals', JSON.stringify(mealsList))
            } else if (heartNum === 2) {
                heart.style.backgroundImage = "url(./images/heart1.png)"
                const li = document.createElement('li')
                const div = document.createElement('div')
                const span = document.createElement('span')
                li.id = image.getAttribute('name')
                div.style.backgroundImage = `url(${image.getAttribute('id')})`
                span.textContent = imageName.textContent
=======
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
                    return List.id!==randomMeal.idMeal
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
>>>>>>> b155891cad05b00ad7d3396a0127455727cd52b0
                li.appendChild(div)
                li.appendChild(span)
                ul.appendChild(li)
                heartNum++
<<<<<<< HEAD
                meals = {
                    id: image.getAttribute('name'),
                    name: imageName.textContent,
                    heartNum: heartNum,
                    backgroundImage: `url(${image.getAttribute('id')})`
                }
                mealsList.push(meals)
                localStorage.setItem('meals', JSON.stringify(mealsList))
            } else if (heartNum === 3) {
                heart.style.backgroundImage = "url(./images/heart.png)"
                heartNum--
                const parent = document.getElementById("mid-low")
                const child = document.getElementById(image.getAttribute('name'))
                parent.removeChild(child)
                const cleanList = mealsList.filter(function (List) {
                    return List.id !== image.getAttribute('name')
                })
                mealsList = cleanList
                localStorage.setItem('meals', JSON.stringify(mealsList))
=======
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
>>>>>>> b155891cad05b00ad7d3396a0127455727cd52b0
            }
            liClick()
        })
    }

<<<<<<< HEAD
    function liClick() {
        const clickList = document.querySelectorAll('li')
        for (let i = 0; i < clickList.length; i++) {
            clickList[i].addEventListener("click", async (e) => {
                const meal = await getMealbyId(e.target.parentNode.id)
                image.style.backgroundImage = `url(${meal.strMealThumb})`
                imageName.textContent = meal.strMeal
                heart.style.backgroundImage = "url(./images/heart1.png)"
                image.setAttribute('name', meal.idMeal)
                image.setAttribute('id', meal.strMealThumb)
                heartNum = 3
                if (meal.strSource) {
                    image.setAttribute('onclick', `window.open("${meal.strSource}")`)
                    imageName.setAttribute('onclick', `window.open("${meal.strSource}")`)
                } else {
                    image.setAttribute('onclick', `alert("I'm sorry, there is no linked website")`)
                    imageName.setAttribute('onclick', `alert("I'm sorry, there is no linked website")`)
=======
    function liClick(){
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
>>>>>>> b155891cad05b00ad7d3396a0127455727cd52b0
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

<<<<<<< HEAD
async function getMealbyId(id) {
    const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const respData = await resp.json();
    const meal = respData.meals[0]
    return meal
}

async function getMealsBySearch(term) {
    const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
    const respData = await resp.json()
    const meals = respData.meals
    return meals
}

const input = document.querySelector("#input")
const searchButton = document.querySelector("#button")
function search() {
    searchButton.addEventListener("click", async (e) => {
        const meals = await getMealsBySearch(input.value)
        if (!input.value) {
            alert("Please enter something")
        } else {
            if (meals === null) {
                alert("There is no result")
            } else {
                const result = document.querySelector("#search-result")
                document.querySelector("#first").style.display = "none"
                while (result.hasChildNodes()) {
                    result.removeChild(result.firstChild)
                }
                for (let i = 0; i < meals.length; i++) {
                    const li = document.createElement('li')
                    const bottomHigh = document.createElement('div')
                    const bottomLow = document.createElement('div')
                    const name = document.createElement('div')
                    const theOtherHeart = document.createElement('div')
                    const space = document.createElement('div')
                    bottomHigh.setAttribute('class', 'bottom-high')
                    bottomHigh.setAttribute('id', i + 1)
                    bottomLow.setAttribute('class', 'bottom-low')
                    name.setAttribute('class', 'name')
                    name.setAttribute('id', i + 1 * 100)
                    theOtherHeart.setAttribute('class', 'the-other-heart')
                    space.setAttribute('class', 'space')
                    space.setAttribute('id', meals[i].idMeal)
                    theOtherHeart.style.backgroundImage = 'url("./images/heart.png")'
                    bottomHigh.style.backgroundImage = `url(${meals[i].strMealThumb})`
                    name.textContent = meals[i].strMeal
=======
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
                document.querySelector("#first").style.display="none"
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
                    space.setAttribute('id',meals[i].idMeal)
                    theOtherHeart.style.backgroundImage='url("./images/heart.png")'
                    bottomHigh.style.backgroundImage=`url(${meals[i].strMealThumb})`
                    name.textContent=meals[i].strMeal
>>>>>>> b155891cad05b00ad7d3396a0127455727cd52b0
                    bottomLow.appendChild(name)
                    bottomLow.appendChild(theOtherHeart)
                    space.appendChild(bottomHigh)
                    space.appendChild(bottomLow)
                    li.appendChild(space)
                    result.appendChild(li)
<<<<<<< HEAD
                    for (let v = 0; v < mealsList.length; v++) {
                        if (meals[i].idMeal === mealsList[v].id) {
                            theOtherHeart.style.backgroundImage = 'url("./images/heart1.png")'
                            theOtherHeart.setAttribute('id', 'styled')
=======
                    for(let v=0; v<mealsList.length;v++){
                        if(meals[i].idMeal===mealsList[v].id){
                            theOtherHeart.style.backgroundImage='url("./images/heart1.png")'
                            theOtherHeart.setAttribute('id','styled')
>>>>>>> b155891cad05b00ad7d3396a0127455727cd52b0
                        }
                    }
                }
            }
        }

        sth()
<<<<<<< HEAD
        const hearts = document.getElementsByClassName("the-other-heart")
        Array.from(hearts).forEach(function (like) {
            like.addEventListener('click', async (e) => {
                const meal = await getMealbyId(e.target.parentNode.parentNode.id)
                if (e.target.id) {
                    like.style.backgroundImage = "url(./images/heart.png)"
                    const parent = document.getElementById("mid-low")
                    const child = document.getElementById(meal.idMeal)
                    parent.removeChild(child)
                    const cleanList = mealsList.filter(function (List) {
                        return List.id !== meal.idMeal
                    })
                    mealsList = cleanList
                    localStorage.setItem('meals', JSON.stringify(mealsList))
                    e.target.removeAttribute('id')
                } else {
                    like.style.backgroundImage = "url(./images/heart1.png)"
                    const li = document.createElement('li')
                    const div = document.createElement('div')
                    const span = document.createElement('span')
                    li.id = meal.idMeal
                    div.style.backgroundImage = `url(${meal.strMealThumb})`
                    span.textContent = meal.strMeal
                    li.appendChild(div)
                    li.appendChild(span)
                    ul.appendChild(li)
                    e.target.setAttribute('id', 'styled')
                    anotherMeals = {
                        id: meal.idMeal,
                        name: meal.strMeal,
                        backgroundImage: `url(${meal.strMealThumb})`
                    }
                    mealsList.push(anotherMeals)
                    localStorage.setItem('meals', JSON.stringify(mealsList))
=======
        const hearts=document.getElementsByClassName("the-other-heart")
        Array.from(hearts).forEach(function(like){
            like.addEventListener('click',async(e)=>{
                const meal= await getMealbyId(e.target.parentNode.parentNode.id)
                if(e.target.id){
                    like.style.backgroundImage="url(./images/heart.png)"
                    const parent=document.getElementById("mid-low")
                    const child=document.getElementById(meal.idMeal)
                    parent.removeChild(child)
                    const cleanList=mealsList.filter(function(List){
                        return List.id!==meal.idMeal
                    })
                    mealsList=cleanList
                    localStorage.setItem('meals',JSON.stringify(mealsList))
                    e.target.removeAttribute('id')
                }else{
                    like.style.backgroundImage="url(./images/heart1.png)"
                    const li=document.createElement('li')
                    const div=document.createElement('div')
                    const span=document.createElement('span')
                    li.id=meal.idMeal
                    div.style.backgroundImage=`url(${meal.strMealThumb})`
                    span.textContent=meal.strMeal
                    li.appendChild(div)
                    li.appendChild(span)
                    ul.appendChild(li)
                    e.target.setAttribute('id','styled')
                    anotherMeals={
                        id:meal.idMeal,
                        name:meal.strMeal,
                        backgroundImage:`url(${meal.strMealThumb})`
                    }
                    mealsList.push(anotherMeals)
                    localStorage.setItem('meals',JSON.stringify(mealsList))
>>>>>>> b155891cad05b00ad7d3396a0127455727cd52b0
                }
            })
        })
    })
}

<<<<<<< HEAD
async function sth() {
    const meals = await getMealsBySearch(input.value)
    for (let i = 0; i < meals.length; i++) {
        if (meals[i].strSource) {
            document.getElementById(`${i + 1}`).setAttribute('onclick', `window.open("${meals[i].strSource}")`)
            document.getElementById(`${i + 1 * 100}`).setAttribute('onclick', `window.open("${meals[i].strSource}")`)
        } else {
            document.getElementById(`${i + 1}`).setAttribute('onclick', `alert("I'm sorry, there is no linked website")`)
            document.getElementById(`${i + 1 * 100}`).setAttribute('onclick', `alert("I'm sorry, there is no linked website")`)
=======
async function sth(){
    const meals=await getMealsBySearch(input.value)
    for(let i=0;i<meals.length;i++){
        if(meals[i].strSource){
            document.getElementById(`${i+1}`).setAttribute('onclick',`window.open("${meals[i].strSource}")`)
            document.getElementById(`${i+1*100}`).setAttribute('onclick',`window.open("${meals[i].strSource}")`)
        }else{
            document.getElementById(`${i+1}`).setAttribute('onclick',`alert("I'm sorry, there is no linked website")`)
            document.getElementById(`${i+1*100}`).setAttribute('onclick',`alert("I'm sorry, there is no linked website")`)
>>>>>>> b155891cad05b00ad7d3396a0127455727cd52b0
        }
    }
}

<<<<<<< HEAD
function init() {
=======
function init(){
>>>>>>> b155891cad05b00ad7d3396a0127455727cd52b0
    useGetRandomMeal()
    search()
}

init()