let cityNameElement = document.querySelector('.search-box');
let cityName = 'chennai';

// cityNameElement.addEventListener('keypress', (e)=>{

//     setTimeout(() => {
//         cityName = e.target.value
//     }, 1000);
// })


const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c8b4d17142ba5f1db95a6fb3fc5aa221`



    let res = fetch(url).then(response => response.json()).then
(data=> data);

console.log(res)