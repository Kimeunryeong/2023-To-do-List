const API_KEY = "3eaa2f3846048ef8be2128e63c36c084"

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