function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
   var editValue = prompt("ENTER EDIT VALUE")
   
   e.parentNode.firstChild.nodeValue = editValue;
}


var list = document.getElementById('list');

function addTodo(){
    var todo = document.getElementById('todo-item')
    var li = document.createElement('li')
    var liText = document.createTextNode(todo.value)
    li.appendChild(liText)
    list.appendChild(li)
    todo.value =" "

    var delBtn = document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("onclick", "deleteItem(this)")
    delBtn.appendChild(delText)

    var editBtn = document.createElement("button")
    var editText = document.createTextNode("EDIT")
    editBtn.appendChild(editText)
    editBtn.setAttribute("onclick","editItem(this)")

    li.appendChild(delBtn)
    li.appendChild(editBtn)
   
}

function deleteItem(e){
    e.parentNode.remove()
}



function deleteAll(){
    list.innerHTML = " "
}