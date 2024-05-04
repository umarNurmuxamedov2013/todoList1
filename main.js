let todoInput = document.getElementById("todo-input")
let todoBtn = document.getElementById("todo-btn")
let todoList = document.getElementById("todo-list")

todoBtn.addEventListener("click" , function name(event) { 
    event.preventDefault();
    

    let todoDiv = document.createElement("div")
    let todoText = document.createElement("li")
    
    todoText.innerHTML = todoInput.value;
    todoDiv.appendChild(todoText)
    todoList.appendChild(todoDiv)
            console.log(totoDiv);
})



