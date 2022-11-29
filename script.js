
let i = 1
let y = 1
let x = 1


document.getElementById("confirmTask").addEventListener("click", addTask)

function addTask() {
    var getTask = document.getElementById("insertTask").value;
    if (getTask.length >= 3) {
 
        var newTask = document.createElement("span");
        newTask.id = "task" + i++
        newTask.className = "tasks";
        document.getElementById("taskList").appendChild(newTask);
        newTask.innerText = getTask;
        document.getElementById("insertTask").value = ""
        addDeleteBtn();
        document.getElementById("taskList").style.padding = 10 + "px"
    } else {
        
        var popup = document.createElement("div")
        popup.id = "popUp"
        popup.innerText = "You must enter more than 3 characters..."
        document.getElementById("header").appendChild(popup)
        document.getElementById("popUp").style.transition = "all 2s"

        setTimeout(deletePopUp, 2500)

    }
}

function deletePopUp() {
    document.getElementById("popUp").remove()
}


function addDeleteBtn() {

    var deleteBtn = document.createElement("span")
    deleteBtn.id = "deleteTask" + y++
    deleteBtn.className = "material-symbols-outlined"
    deleteBtn.innerHTML = "delete"
    document.getElementById("task" + x++).appendChild(deleteBtn)
    deleteBtn.onclick = deleteItem;
}

function deleteItem() {
    this.parentNode.parentNode.removeChild(this.parentNode);
    
    if (document.getElementById("taskList").childElementCount === 0) {
        document.getElementById("taskList").style.padding = 0 + "px"
    } else {
        document.getElementById("taskList").style.padding = 10 + "px"
    }

}