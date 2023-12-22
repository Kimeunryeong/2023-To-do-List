const API_KEY = "3eaa2f3846048ef8be2128e63c36c084"
// 날씨 나타내기
// const temp = result.main.temp;
// const weather = result.weather[0].main;

// const weatherValue = {
//     Clear: "맑음",
//     Rain: "비",
//     Thunderstorm: "뇌우",
//     Snow : "눈",
//     Mist : "옅은 안개",
//     Drizzle: "이슬비",
//     Clouds: "흐림",
//     Fog: "안개",
//     Haze: "실안개"
// }
// // console.log (weather)
// const displayWeatherInfo = (temp, weather) => {
//     changeBackgroundImg(weather);
//     document.querySelector(".weather").textContent = weatherValue[weather];
//     document.querySelector(".temp").textContent = temp.toFixed(1) + "°C";
// }

function onGeoSuccess(position) {
    // console.log(position)
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const weather = document.querySelector("#weather");

            weather.innerText=data.weather[0].main+ " " + data.main.temp
        })
}
function onGeoFail() {
    alert("현재 위치를 가져올 수 없습니다.")
}
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail)