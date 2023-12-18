const randImage = document.querySelector("#rand-image")
const images = ["memo2.jpg", "모눈종이.jpg"]

const selectedImage=images[Math.floor(Math.random() * images.length)]

const img = document.createElement("img")
img.setAttribute("src", `/${selectedImage}`)
randImage.appendChild(img)