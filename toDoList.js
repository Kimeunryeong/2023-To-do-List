const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];  // 할 일 목록을 저장할 배열

// 할 일 목록을 로컬 스토리지에 저장하는 함수
function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));  // 할 일 목록을 로컬 스토리지에 JSON 형태로 저장
}

// 할 일 삭제하는 함수
function deleteToDo(e) {
    const li = e.target.parentElement;
    li.remove();
    // 삭제된 항목을 배열에서도 제거하고 저장
    toDos = toDos.filter((item) => item.id !== parseInt(li.id));
    saveToDos();
}

// 할 일을 화면에 그리는 함수
function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.setAttribute("id", newTodo.id);

    const checkbox = document.createElement("input");
    checkbox.setAttribute('type', 'checkbox');

    const span = document.createElement("span");

    const button = document.createElement("button");
    button.innerText = "🧨";
    button.addEventListener("click", deleteToDo);

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo.text;
    toDoList.appendChild(li);

    // 체크박스의 상태가 변경될 때 처리
    checkbox.addEventListener('change', () => {
        const isChecked = checkbox.checked;
        // 체크 여부에 따라 텍스트와 버튼에 줄 효과를 적용 또는 제거
        span.style.textDecorationLine = isChecked ? "line-through" : "none";
        span.style.fontWeight = isChecked ? "normal" : "bold";
    });
}


// 할 일을 추가하는 이벤트 핸들러 함수
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodoObj = {
        text: toDoInput.value,
        id: Date.now()
    };
    toDoInput.value = "";
    paintToDo(newTodoObj);
    toDos.push(newTodoObj);
    saveToDos();
}

// 폼 제출 이벤트 리스너 등록ㄴㄹ
toDoForm.addEventListener("submit", handleToDoSubmit);

// 로컬 스토리지에서 할 일 목록을 가져와 화면에 표시
const savedToDos = localStorage.getItem("todos");

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    toDos.forEach(paintToDo);  // 로컬 스토리지에서 불러온 할 일 목록을 화면에 표시
}
