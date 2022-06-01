//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

function addRow() {
  alert("Record added successfully!")

  if (isNaN(document.getElementById("myTable").value)){
  var table = document.getElementById("myTable");
  var tbodyRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];
  var temp = table.lastElementChild.lastElementChild.firstElementChild.nextElementSibling.innerHTML;
  var last = temp.charAt(temp.length - 1);
  var row = document.createElement("tr");
  var checkCell = document.createElement("td");
  checkCell.innerHTML =
  '<input id="checkbox" type="checkbox" onclick="checkboxOnclick(this)"/><br/><br/><img src="down.png" width="25px" onclick="imgOnClick(this)"/>';
  var stuCell = document.createElement("td");
  stuCell.innerHTML = "Student "+ (parseInt(last)+1);
  var advCell = document.createElement("td");
  advCell.innerHTML = "Teacher "+ (parseInt(last)+1);
  var staCell = document.createElement("td");
  staCell.innerHTML = "Approved";
  var semCell = document.createElement("td");
  semCell.innerHTML = "Fall";
  var typCell = document.createElement("td");
  typCell.innerHTML = "TA";
  var budCell = document.createElement("td");
  budCell.innerHTML = "12345";
  var perCell = document.createElement("td");
  perCell.innerHTML = "100%";
  row.appendChild(checkCell);
  row.appendChild(stuCell);
  row.appendChild(advCell);
  row.appendChild(staCell);
  row.appendChild(semCell);
  row.appendChild(typCell);
  row.appendChild(budCell);
  row.appendChild(perCell);
  tbodyRef.appendChild(row);

  }
  else {
    alert("Record addition failed!")
  }

}


function checkboxOnclick(checkbox) {

  var r = checkbox.parentElement.parentElement; //tr
  if (checkbox.checked == true) {
  document.getElementById("button").disabled = false;
  document.getElementById("button").style.backgroundColor = "orange";
  r.style.backgroundColor = "yellow";

  // deleting
  var del = document.createElement("td");
  del.setAttribute("id", "delTd");
  del.innerHTML =
  '<button id="delete" type="button" onclick="deleteRow(this)">Delete</button>';
  r.appendChild(del);

  // editing
  var edit = document.createElement("td");
  edit.setAttribute("id", "editTd");
  edit.innerHTML =
  '<button id="edit" type="button" onclick="editRow(this)">Edit</button>';
  r.appendChild(edit);
  // document.getElementById("delete").style.visibility="visible";
  count++;
  } else {
  r.style.backgroundColor = "#fff";
  r.deleteCell(8); //delete the button
  r.deleteCell(8);
  document.getElementById("button").disabled = true;
  document.getElementById("button").style.backgroundColor = "gray";
  }
  }

function deleteRow(obj) {
  var tr = obj.parentElement.parentElement;
  document.getElementById("myTable").deleteRow(tr.rowIndex);
  // document.getElementById("myTable").deleteRow(tr.rowIndex);

  count--;
  if (count == 0) {
    document.getElementById("button").disabled = true;
    document.getElementById("button").style.backgroundColor = "initial";
    }
    alert("Record deleted successfully!")
  }

function editRow(obj) {
  var tr = obj.parentElement.parentElement;
  document.getElementById("myTable");
  // document.getElementById("myTable").deleteRow(tr.rowIndex);

  count--;
  if (count >= 0) {
    document.getElementById("button").disabled = true;
    document.getElementById("button").style.backgroundColor = "initial";
    alert("Edit the details!")

  }
}

function insertAfter(newEl, targetEl) {
  var parentEl = targetEl.parentNode;
  if (parentEl.lastChild == targetEl) {
    parentEl.appendChild(newEl);
  } else {
    parentEl.insertBefore(newEl, targetEl.nextSibling);
  }
}

var count1 = 0;
function imgOnClick(obj) {
  if (count1 == 0) {
    var tr = obj.parentNode.parentNode;
    var newrow = document.createElement("tr");
    var col = document.createElement("td");
    col.innerHTML =
      "Advisor:<br/><br/>Award Details<br/>Summer 1-2014(TA)<br/>Budget Number: <br/>Tuition Number: <br/>Comments:<br /><br/><br/>Award Status:<br/><br/><br/>";
    col.colSpan = "8";
    newrow.appendChild(col);
    insertAfter(newrow, tr);
    count1++;
  } else {
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTable");
    table.deleteRow(index + 1);
    count1 = 0;
  }
}