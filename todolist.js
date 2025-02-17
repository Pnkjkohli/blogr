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

//  document.getElementById("inputText").value = "";


//   var table = document.getElementById("tasklist").getElementsByTagName('tbody')[0];
//   var row = table.insertRow();
//   var sno = row.insertCell(0);
//   var taskCell = row.insertCell(1);
//   var dateCell = row.insertCell(2);
//   var actionCell = row.insertCell(3);

//   var rowCount = table.rows.length;
//   sno.textContent = rowCount;
 
//   taskCell.textContent = inputValue;
//   dateCell.textContent = dateStr;
 

//   // Create the 'edit' icon
//   var editSpan = document.createElement("SPAN");
//   var editTxt = document.createTextNode("\u270E");  
//   editSpan.className = "edit";
//   editSpan.appendChild(editTxt);
//   li.appendChild(editSpan);
//   actionCell.appendChild(editSpan);

//   // Create the 'close' icon
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);
//   actionCell.appendChild(span);

//   // Edit task functionality (make it editable in place)
//   editSpan.onclick = function() {
//     // Make the task text editable by wrapping it in a contenteditable element
//     var taskText = li.firstChild; 
   
   
    
//     console.log(taskText);
//     if (taskText.nodeType === 3) { 
   
//       var editableText = document.createElement("span");
//       editableText.setAttribute("contenteditable", "true");
//       editableText.className = "editable-text";
//       editableText.textContent = taskText.textContent;  // Set initial text

//       li.replaceChild(editableText, taskText);  // Replace the text node with the editable span

//       // Focus on the text field to edit
//       editableText.focus();

//       // Save on blur (clicking outside)
//       editableText.onblur = function() {
//         taskText.textContent = editableText.textContent;  
//         li.replaceChild(taskText, editableText);  // Replace the editable span with text node
//       };

 
//       editableText.onkeydown = function(e) {
//         if (e.key === 'Enter') {
//           e.preventDefault();
//           editableText.blur();
//         }
//       };
//     }
//   };

//   // Close task functionality
//   span.onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   };
// }





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
//     table.style.display="none";
//   } else {
//     // document.getElementById("tasklist").appendChild(li);
//   }

//   document.getElementById("inputText").value = "";

//   var table = document.getElementById("tasklist").getElementsByTagName('tbody')[0];
//   var row = table.insertRow();
//   var sno = row.insertCell(0);
//   var taskCell = row.insertCell(1);
//   var dateCell = row.insertCell(2);
//   var actionCell = row.insertCell(3);

//   var rowCount = table.rows.length;
//   sno.textContent = rowCount;

//   taskCell.textContent = inputValue;
//   dateCell.textContent = dateStr;

//   // Create the 'edit' icon
//   var editSpan = document.createElement("SPAN");
//   var editTxt = document.createTextNode("\u270E");  
//   editSpan.className = "edit";
//   editSpan.appendChild(editTxt);
//   li.appendChild(editSpan);
//   actionCell.appendChild(editSpan);

//   // Create the 'close' icon
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);
//   actionCell.appendChild(span);

//   // Add event listener for the edit icon
//   editSpan.addEventListener('click', function() {
//     // When clicked, replace the text with an input field
//     var currentText = taskCell.textContent;
//     var inputField = document.createElement("input");
//     inputField.type = "text";
//     inputField.value = currentText;

  
    
//     // Replace the task cell content with the input field
//     taskCell.innerHTML = '';
//     taskCell.appendChild(inputField);
    
//     // Focus on the input field so the user can immediately start editing
//     inputField.focus();
    
//     // Add an event listener to save the edited text when Enter key is pressed
//     inputField.addEventListener('keydown', function(event) {
//       if (event.key === 'Enter') {
//         taskCell.textContent = inputField.value;
//       }
//     });
    
//     // Also, listen for blur (when the input loses focus)
//     inputField.addEventListener('blur', function() {
//       taskCell.textContent = inputField.value;
//     });
//   });

//   // Add event listener for the close icon
//   span.addEventListener('click', function() {
//     row.remove(); // Removes the task from the list
//     // document.getElementById("inputText").value = "";

//   });
// }


function newElement() {
  var tasklist= document.getElementById('tasklist').style.display="";
  var tasklist= document.getElementById('tasklist').style.width="96%";
  var inputValue = document.getElementById("inputText").value;
 
  // If no value is entered, show an alert
  if (inputValue === '') {
    alert("You must write something!");
    return;
  }


  // Create a new row in the table
  var table = document.getElementById("tasklist").getElementsByTagName('tbody')[0];
  var row = table.insertRow();
  // Insert cells for the row
  var sno = row.insertCell(0);
  var taskCell = row.insertCell(1);
  var dateCell = row.insertCell(2);
  var actionCell = row.insertCell(3);

  // Get the current row count for serial number
  var rowCount = table.rows.length;
  sno.textContent = rowCount;

  // Date and task content
  taskCell.textContent = inputValue;
taskCell.id="newinput";

  var dueDateInput = document.createElement("input");
  dueDateInput.type = "date";


  var today = new Date().toISOString().split('T')[0]; // Format to yyyy-mm-dd
  dueDateInput.value = today;
 

  dateCell.appendChild(dueDateInput);

  dueDateInput.setAttribute("disabled", "");

  
  // Create the 'edit' 
  var editSpan = document.createElement("SPAN");
  var editTxt = document.createTextNode("\u270E");  
  editSpan.className = "edit";
  editSpan.appendChild(editTxt);
  actionCell.appendChild(editSpan);
  

  // Create the 'close' 
  var closeSpan = document.createElement("SPAN");
  var closeTxt = document.createTextNode("\u00D7");
  closeSpan.className = "close";
  closeSpan.appendChild(closeTxt);
  actionCell.appendChild(closeSpan);




 
  editSpan.addEventListener('click', function() {
    var currentText = taskCell.textContent;
    var inputField = document.createElement("input");
    inputField.type = "text";
    inputField.value = currentText;
  
    dueDateInput.removeAttribute("disabled");

    taskCell.innerHTML = '';
    taskCell.appendChild(inputField);

    // Focus on the input field
    inputField.focus();
  
   
    inputField.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        taskCell.textContent = inputField.value;
      }
      dueDateInput.setAttribute("disabled", "");
      
    });

 
    inputField.addEventListener('blur', function() {
      taskCell.textContent = inputField.value;
    });
  
  });

 
  closeSpan.addEventListener('click', function() {
    row.remove(); // Remove the specific row when clicked

  //   var thead = document.getElementsByTagName('thead')[0];
  //   var tbody = document.getElementsByTagName('tbody')[0];

  //  if (tbody.rows.length === 0) {
  //   thead.style.display = "none";
  //  }

  });

  // Clear the input field
  document.getElementById("inputText").value = "";
}


