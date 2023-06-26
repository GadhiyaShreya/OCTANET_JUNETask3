// Add event listener to the "Add New Task" button
document.getElementById("add-btn").addEventListener("click", function() {
  var todoList = document.getElementById("todo-list");

  // Create a new to-do item div
  var todoItem = document.createElement("div");
  todoItem.className = "todo-item";

  // Create a new checkbox
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  todoItem.appendChild(checkbox);

  // Create a new label
  var label = document.createElement("label");
  var taskName = prompt("Enter the task name:");
  label.textContent = taskName;
  todoItem.appendChild(label);

  // Create a new delete button
  var deleteButton = document.createElement("button");
  deleteButton.className = "delete-btn";
  deleteButton.textContent = "Delete";
  todoItem.appendChild(deleteButton);

  // Add the new to-do item to the to-do list
  todoList.appendChild(todoItem);

  // Add event listener to the delete button
  deleteButton.addEventListener("click", function() {
    todoList.removeChild(todoItem);
  });
});
