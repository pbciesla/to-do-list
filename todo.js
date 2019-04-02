function done(id) {
  id.className="checked";
}

function addTask() {
  var ul = document.getElementById("taskList");
  var newTask = document.getElementById("myInput").value;
  var li = document.createElement("li");
  li.setAttribute('id', newTask);
  li.setAttribute('onclick', 'done(this)');
  li.appendChild(document.createTextNode(newTask));
  ul.appendChild(li);
}
