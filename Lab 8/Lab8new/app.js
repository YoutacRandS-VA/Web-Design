
console.log("Inside app.js");


var newTask = document.querySelector('#new-task');
var addTaskButton = document.querySelector("#addTask");

var toDoUl = document.querySelector('.todo-list ul');
var completeUl = document.querySelector('.complete-list ul');


var createNewTask = function(task) {
    console.log("Creating new Task...");

    var listItem = document.createElement("li");
    var checkBox = document.createElement("input");
    var label = document.createElement("label");

    listItem.className = "list-group-item";

    label.innerText = task;
    checkBox.type = "checkBox";

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
}

var addTask = function() {
    console.log("Adding task");

    var listItem = createNewTask(newTask.value);

    toDoUl.appendChild(listItem);
    newTask.value = "";

    bindIncompleteItems(listItem, completeTask);
}

var completeTask = function() {
    var listItem = this.parentNode;

    var deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete btn btn-danger pull-right";
    listItem.appendChild(deleteBtn);

    var checkBox = listItem.querySelector("input[type=checkbox]");
    checkBox.remove();

    completeUl.appendChild(listItem);

    bindCompleteItems(listItem, deleteTask);
}

var deleteTask = function(){
    console.log("Deleting task");

    var listItem = this.parentNode;
    var ul = listItem.parentNode;

    ul.removeChild(listItem);
}

var bindIncompleteItems = function(taskItem, checkBoxClick) {
    console.log("Binding the incomplete list");

    var checkBox  = taskItem.querySelector("input[type=checkbox]");
    checkBox.className = "pull-right";

    checkBox.onchange = checkBoxClick;
}

var bindCompleteItems = function(taskItem, deleteButtonPress) {
    console.log(("Binding the complete List"));

    var deleteBtn = taskItem.querySelector(".delete");

    deleteBtn.onclick = deleteButtonPress;
}


addTaskButton.addEventListener("click", addTask);


$(function(){
    populateText();
        $('#buttonClick').click(function(e){
            e.preventDefault();
            console.log('Submit button is clicked');
            var	mes = document.getElementById("mess").value;
;		
            var data = {};
            data.message = mes;
            console.log(data.message);
        
            $.ajax({
                type: 'POST',
                data: JSON.stringify(data),
                contentType: 'application/json',
                url: 'http://localhost:3000/api/insert',						
                success: function(result) {
                    console.log('success');
                }
                
            });
           // getLastElement();
           $.get('http://localhost:3000/api/show', function(data, status){
                //console.log("data is hereee  " + data[data.length - 1].message);
                $("h4").append(data[data.length - 1].message + "<br/>");
            });
        });	
    });

function populateText() {
    $.get('http://localhost:3000/api/show', function(data, status){
        $.each(data, function(i, item) {
            console.log(data[i].message);
            $("h4").append(data[i].message + "<br/>");
        })
    });
}