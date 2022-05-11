let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

addToDoButton.addEventListener("click", function() {
    var paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-styling");
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    inputField.onkeypress = handleKeyPress;
})

function handleKeyPress(e) {
    let addToDoButton = document.getElementById("addToDo");
    if (e.keyCode === 13) {
        addToDo.click();
        return false;
    }
};