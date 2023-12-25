const API_KEY = "3eaa2f3846048ef8be2128e63c36c084";
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

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    // Fetch API를 이용하여 API로부터 날씨 정보 가져오기
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // 날씨 정보를 표시할 요소를 가져오기
      const weatherElement = document.querySelector("#weather");
      // 날씨에 따라 이모지를 가져오는 함수 호출
      const emoji = getWeatherEmoji(data.weather[0].main);

      // 가져온 날씨 정보를 HTML에 표시
      weatherElement.innerHTML = `오늘의 날씨는 ${emoji}
      현재 온도는 ${data.main.temp}°C`;
    });
}

// 사용자의 위치 정보를 가져오지 못한 경우 실행되는 함수
function onGeoFail() {
  // 알림창을 통해 사용자에게 메시지 표시
  alert("현재 위치를 가져올 수 없습니다.");
}

// 브라우저의 위치 정보를 가져오는 함수 호출
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail);

// 날씨에 따라 이모지를 반환하는 함수
function getWeatherEmoji(weatherMain) {
  // 날씨에 따라 적절한 이모지 선택
  if (weatherMain === "Clear") {
    return "☀️";
  } else if (weatherMain === "Rain") {
    return "🌧️";
  } else if (weatherMain === "Thunderstorm") {
    return "⛈️";
  } else if (weatherMain === "Snow") {
    return "❄️";
  } else if (weatherMain === "Mist" || weatherMain === "Fog" || weatherMain === "Haze") {
    return "🌫️";
  } else if (weatherMain === "Drizzle") {
    return "🌦️";
  } else if (weatherMain === "Clouds") {
    return "☁️";
  } else {
    return "❓"; // 알 수 없는 날씨인 경우
  }
}