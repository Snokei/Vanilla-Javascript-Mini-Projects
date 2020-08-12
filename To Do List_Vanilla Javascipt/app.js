//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listener
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);


//Functions
function addTodo(event){
   
    event.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    
    //create li tag.
    const newTodo = document.createElement('li');
    newTodo.innerHTML = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //Check Mark button.
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //Delete button.
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Append to List.
    todoList.appendChild(todoDiv);

    //Clear Todo Input Value.
    todoInput.value = ""; 
}

function deleteCheck(e){

    console.log(e.target);
    const del = e.target;

    if(del.classList[0] === "trash-btn"){
        const delContent = del.parentElement;
        //Animation
        delContent.classList.add("fall");
        delContent.addEventListener('transitionend',function(){
            delContent.remove();
        })
        
    }

    if(del.classList[0] === "complete-btn"){
        const compContent = del.parentElement;
        compContent.classList.toggle("Completed")
    }

}