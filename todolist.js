var tasklist = document.getElementsByTagName('LI');

console.log(tasklist);

var i;
for (i = 0; i < tasklist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");

  span.className = "close";
  span.appendChild(txt);


  tasklist[i].appendChild(span);
}


// hide list 
var closelist = document.getElementsByClassName("close");
console.log(closelist);

var i;
for (i = 0; i < closelist.length; i++) {
  closelist[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
 
  
}

// checked on list 
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   // alert(123);
//   if (ev.target.tagName === 'LI') {
//     // list.className = 'fa';
//     ev.target.classList.toggle('checked');
//     // ev.target.classList.toggle('fa-check-circle');
  
    
  
//   }
// });









// function newElement() {

//   var li = document.createElement("li");
//   var inputValue = document.getElementById("inputText").value;
//   var t = document.createTextNode(inputValue);

//   var now = new Date();
//   var dateStr = now.toLocaleString();

//   var datenode = document.createTextNode("(" + dateStr + ")");

//   console.log(t);
//   li.appendChild(t);
//   li.appendChild(datenode);






//   if (inputValue === '') {
  
//     alert("You must write something!");
//   } else {
//     document.getElementById("tasklist").appendChild(li);
//   }

//   document.getElementById("inputText").value = "";

//   // Create the 'edit' icon
//   var editSpan = document.createElement("SPAN");
//   var editTxt = document.createTextNode("\u270E");  
//   // var idspan = document.getElementById('edit');
//   editSpan.className = "edit";
//   editSpan.appendChild(editTxt);
//   li.appendChild(editSpan);

//   // Create the 'close' icon
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   editSpan.onclick = function() {
//     var newText = prompt("Edit your task:", t.textContent);
//     if (newText != null && newText !== "") {
//       t.textContent = newText;
//     }
//   };

 
//   span.onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   };



// }






// let currentTaskElement = null;  // Store the current task element being edited

// function newElement() {

//   var li = document.createElement("li");
//   var inputValue = document.getElementById("inputText").value;
//   var t = document.createTextNode(inputValue);

//   var now = new Date();
//   var dateStr = now.toLocaleString();

//   var datenode = document.createTextNode("(" + dateStr + ")");

//   console.log(t);
//   li.appendChild(t);
//   li.appendChild(datenode);

//   if (inputValue === '') {
//     alert("You must write something!");
//   } else {
//     document.getElementById("tasklist").appendChild(li);
//   }

//   document.getElementById("inputText").value = "";

//   // Create the 'edit' icon
//   var editSpan = document.createElement("SPAN");
//   var editTxt = document.createTextNode("\u270E");  
//   editSpan.className = "edit";
//   editSpan.appendChild(editTxt);
//   li.appendChild(editSpan);

//   // Create the 'close' icon
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   // Edit task functionality (open modal)
//   editSpan.onclick = function() {
//     openModal(t.textContent, li);  // Open the modal and pass the task and li element
//   };

//   // Close task functionality
//   span.onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   };
// }

// // Open the modal to edit a task
// function openModal(taskText, taskLiElement) {
//   currentTaskElement = taskLiElement;  // Save the li element being edited
//   document.getElementById("editTaskText").value = taskText;
//   document.getElementById("editModal").style.display = "block";
// }

// // Close the modal
// function closeModal() {
//   document.getElementById("editModal").style.display = "none";
// }

// // Save the edited task
// function saveEdit() {
//   if (currentTaskElement) {
//     var editedText = document.getElementById("editTaskText").value;
//     currentTaskElement.firstChild.textContent = editedText;  // Update the task text
//     closeModal();  // Close the modal after saving
//   }
// }





function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("inputText").value;
  var t = document.createTextNode(inputValue);

  var now = new Date();
  var dateStr = now.toLocaleString();

  var datenode = document.createTextNode("(" + dateStr + ")");

  console.log(t);
  li.appendChild(t);
  li.appendChild(datenode);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("tasklist").appendChild(li);
  }

 document.getElementById("inputText").value = "";


  // var table = document.getElementById("tasklist").getElementsByTagName('tbody')[0];
  // var row = table.insertRow();
  // var sno = row.insertCell(0);
  // var taskCell = row.insertCell(1);
  // var dateCell = row.insertCell(2);
  // var actionCell = row.insertCell(3);

  // var rowCount = table.rows.length;
  // sno.textContent = rowCount;
 
  // taskCell.textContent = inputValue;
  // dateCell.textContent = dateStr;
 

  // Create the 'edit' icon
  var editSpan = document.createElement("SPAN");
  var editTxt = document.createTextNode("\u270E");  
  editSpan.className = "edit";
  editSpan.appendChild(editTxt);
  li.appendChild(editSpan);
  // actionCell.appendChild(editSpan);

  // Create the 'close' icon
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  // actionCell.appendChild(span);

  // Edit task functionality (make it editable in place)
  editSpan.onclick = function() {
    // Make the task text editable by wrapping it in a contenteditable element
    var taskText = li.firstChild; 
    // The task text node
    
    console.log(taskText);
    if (taskText.nodeType === 3) { 
   
      var editableText = document.createElement("span");
      editableText.setAttribute("contenteditable", "true");
      editableText.className = "editable-text";
      editableText.textContent = taskText.textContent;  // Set initial text

      li.replaceChild(editableText, taskText);  // Replace the text node with the editable span

      // Focus on the text field to edit
      editableText.focus();

      // Save on blur (clicking outside)
      editableText.onblur = function() {
        taskText.textContent = editableText.textContent;  
        li.replaceChild(taskText, editableText);  // Replace the editable span with text node
      };

 
      editableText.onkeydown = function(e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          editableText.blur();
        }
      };
    }
  };

  // Close task functionality
  span.onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  };
}


// let currentTaskElement = null;  

// function newElement() {
//   var inputValue = document.getElementById("inputText").value;
  
//   if (inputValue === '') {
//     alert("You must write something!");
//     return;
//   }

//   var table = document.getElementById("tasklist").getElementsByTagName('tbody')[0];
//   var row = table.insertRow();
//   var taskCell = row.insertCell(0);
//   var dateCell = row.insertCell(1);
//   var actionCell = row.insertCell(2);

//   var now = new Date();
//   var dateStr = now.toLocaleString();
  
//   taskCell.textContent = inputValue;
//   dateCell.textContent = dateStr;

//   // Create the 'edit' button
//   var editBtn = document.createElement("button");
//   editBtn.textContent = "Edit";
//   editBtn.className = "editBtn";
//   actionCell.appendChild(editBtn);

//   // Create the 'delete' button
//   var deleteBtn = document.createElement("button");
//   deleteBtn.textContent = "Delete";
//   deleteBtn.className = "deleteBtn";
//   actionCell.appendChild(deleteBtn);

//   // Edit task button functionality
//   editBtn.onclick = function() {
//     openModal(inputValue, row);  // Pass the current task and the row
//   };

//   // Delete task button functionality
//   deleteBtn.onclick = function() {
//     table.deleteRow(row.rowIndex);  // Remove the row
//   };

//   // Clear input field after adding the task
//   document.getElementById("inputText").value = "";
// }

// // Open the modal to edit a task
// function openModal(taskText, taskRow) {
//   currentTaskElement = taskRow;  // Save the row being edited
//   document.getElementById("editTaskText").value = taskText;
//   document.getElementById("editModal").style.display = "block";
// }

// // Close the modal
// function closeModal() {
//   document.getElementById("editModal").style.display = "none";
// }

// // Save the edited task
// function saveEdit() {
//   if (currentTaskElement) {
//     var editedText = document.getElementById("editTaskText").value;
//     currentTaskElement.cells[0].textContent = editedText;  // Update the task in the table
//     closeModal();
//   }
// }

