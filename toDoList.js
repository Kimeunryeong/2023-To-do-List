const toDoForm = document.querySelector("#todo-form")
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.querySelector("#todo-list")


let toDos = []  //내가 적어놨던 것을 담아주는 함수


function saveToDos() {
    // console.log(toDos)
    localStorage.setItem("todos", JSON.stringify(toDos)) // 로컬스토리지에 내가 썼던 목록이 저장이 된다. 
}

function deleteToDo(e) {    //e라고 써도 이벤트라 통상적으로 블라블라
    const li = e.target.parentElement
    li.remove()
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span")
    const button = document.createElement("button")

    button.innerText = "🧨"
    button.addEventListener("click", deleteToDo) //버튼 클릭시 나타나는 이벤트
    li.appendChild(span)
    li.appendChild(button)
    span.innerText = newTodo;
    toDoList.appendChild(li)
    // const checkBox = document.createElement("input")
    // checkBox.type = "checkbox";)
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value // console.log(toDoInput.value)
    toDoInput.value = ""
    paintToDo(newTodo) // 화면에 그려주는 함수
    toDos.push(newTodo) // newTodo에 썼던 값들이 push를 사용함으로서 toDos에 담아짐.
    saveToDos(); //로컬 스토리지에 저장해주는 함수
    
}

toDoForm.addEventListener("submit", handleToDoSubmit)

const savedToDos = localStorage.getItem("todos")
console.log(savedToDos)

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos)
    toDos = parsedToDos
    toDos.forEach(paintToDo)
}