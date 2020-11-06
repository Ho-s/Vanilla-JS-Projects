# Using Meal API with async/await
이 앱은 https://themealdb.com/ 의 DB API를 사용하여 만들었습니다.  
이 사이트에는 2020년 10월 30일 기준  251개의 음식과 570개의 재료 정보가 있습니다.  
<br>

## How to use API
기본적으로 여기에서는 API를 사용하기 위해, `async`와 `await`을 사용하였습니다.  
`async/await`은 `promise`를 구현하는 다른 방법인데, 그 이유로 여기서는 `async/await`를 사용하였습니다.  
`await`은 `promise`의 `then()`과 콜백함수를 요구하지 않는다는 점 외에는 똑같습니다.  
`await`은 `promise`의 값이 `resolved`되었든,아니든 그 값이 생성될 때까지 실행을 일시 중지시킵니다.  
그 후 값을 받아 변수에 저장하는 것이지요.
여기서 `await`을 쓸 의무는 없지만, 쓰지 않는다면 `promise`의 `resolved`값이 아니라 `promise`객체를 가르킬 것이기 때문에 여기서는 쓰였습니다.  
`await`은 `async`안에 들어가 있어야 작동을 할 수 있습니다.  
다음은 이 app에서 API를 사용하기 위해 쓰인 `async/await`입니다.

```js
async function useGetRandomMeal(){
    const resp = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    const respData = await resp.json()
    let randomMeal= respData.meals[0]
}
```
여기서 `json()`은 response스트림을 가져와 스트림이 완료될 때까지 읽은 후 promise의 형태로 반환헤 주기 위한 것입니다.  
서버가 주는 json데이터를 사용하기 위해서는 위와 같은 코드를 작성해야 합니다.  
<br>

## Other functions
아래는 `await/async`를 사용하여 `api`를 성공적으로 가져온 것입니다.  
세 개의 코드는 전부 배열의 형태로 값이 출력되며, 마지막을 제외한 위 두 개는 1개의 데이터만을 갖고 있습니다.
```js
async function useGetRandomMeal(){
    const resp = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    const respData = await resp.json()
    let randomMeal= respData.meals[0]
}
```

```js
async function getMealbyId(id){
    const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const respData = await resp.json();
    const meal=respData.meals[0]
    return meal
}
```

```js
async function getMealsBySearch(term){
    const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
    const respData = await resp.json()
    const meals= respData.meals
    return meals
}
```


