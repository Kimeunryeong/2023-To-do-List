// 불러온 이미지 안에 명언을 불러오기
const quotes = document.querySelector("#quotes")

fetch("https://api.adviceslip.com/advice")
.then(response => response.json())
.then(data=>{
    const word = data.slip.advice
    quotes.innerText=word
})