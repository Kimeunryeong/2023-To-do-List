const ul = document.querySelector("ul");
const list = ul.querySelectorAll("li:not(.dragging)");
// let toDos = [];

list.forEach((list) => {
    list.addEventListener("dragstart", () => {
        // css클래스 속성 추가하는 코드
        setTimeout(() => list.classList.add("dragging"), 0)
    });
    list.addEventListener("dragend", () => {
        list.classList.remove("dragging")
    });
})

const initSortableList = e => {
    e.preventDefault();
    //대표적인 이벤트 핸들러e만 표현해도 다 안다 아하 이벤트구나 하고 다 안다
    const draggingItem = ul.querySelector(".dragging");
    const siblings = [...ul.querySelectorAll("li:not(.dragging)")];
    //li:not li요소중에 dragging이 아닌것만 가져온다는 태그
    let nextSibling = siblings.find((sibling) => {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
        //e.clientY는 마우스를 움직일때마다 Y값을 반환해준다.
    });
    ul.insertBefore(draggingItem, nextSibling)
};

function saveToDos() {
    localStorage.setItem("toDos", JSON.stringify(toDos));
};

function reSave(newLi) {
    toDos = []
    newLi.forEach(item => {
        const text = item.querySelector("span");
        const newToDoObj = {
            text: text.innerText,
            id: item.id
        };
        toDos.push(newToDoObj);
    });
    saveToDos();
}

ul.addEventListener("dragover", initSortableList);
ul.addEventListener("dragenter", (e) => e.preventDefault())
ul.addEventListener("drop", () => {
    // console.log("로컬스토리지 저장")
    console.lo
    const newLi = document.querySelectorAll("li");
    reSave(newLi);
});

// const first = document.querySelector("ul li:first-child")
// first.draggable = "true"
// console.log("first")

// first.addEventListener("dragstart", () => console.log("drag start"))