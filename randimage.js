const randImage = document.querySelector("#rand-image")
const images = ["1.jpg", "jaedragon.jpg","godttogi.jpg"]

const selectedImage=images[Math.floor(Math.random() * images.length)]

const img = document.createElement("img")
img.setAttribute("src", `/${selectedImage}`)
randImage.appendChild(img)