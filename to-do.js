//VARIABLES
var todoList = document.getElementById("todolist");
var addBtn = document.getElementById("add-btn");
var taskName = document.getElementById("task-name");

//EVENTS
addBtn.addEventListener("click", addFunction);

//FUNCTIONS
function addFunction() {
    //CREATE DIV TAG
    var task = document.createElement("div");
    task.classList.add("task")

    //CREATE LI TAG
    var tname = document.createElement("li");
    tname.classList.add("li-task")
    tname.addEventListener("click", delchkFunction);

    //CREATE P TAG
    var taskTitleBox = document.createElement("p");
    taskTitleBox.classList.add("task-title")
    
    //CREATE TRASH BUTTON
    var trash = document.createElement("BUTTON");
    trash.classList.add("trash")

    //CREATE CHECK BUTTON
    var checked = document.createElement("button");
    checked.classList.add("checked")
    
    //TRASH AND CHECK ICON ADD TO BUTTON
    trash.innerHTML = '<i class="fas fa-trash"></i>';
    checked.innerHTML = '<i class="fas fa-check-circle"></i>';
    
    //ADD INPUT VALUE TO A VARIBLE
    var taskTitle = document.createTextNode(taskName.value);
    
    //APPEND INPUT VALUE TO P TAG
    taskTitleBox.appendChild(taskTitle);

    //APPEND CHECK BUTTON TO LI
    tname.appendChild(checked);

    //APPEND P TAG TO LI
    tname.appendChild(taskTitleBox);

    //APPEND TRASH BUTTON TO LI
    tname.appendChild(trash);

    //APPEND LI TO DIV
    task.appendChild(tname);
    
    //APPEND DIV TO UL TAG
    todoList.appendChild(task);

    //EMPTY INPUT TAG
    taskName.value = "";
} 

function delchkFunction(e){
    const item = e.target;
    if (item.classList[0] === "trash") {
        item.parentElement.parentElement.remove();
    }
    else if (item.classList[0] === "checked"){
        item.parentElement.classList.toggle("completed");
    }
}