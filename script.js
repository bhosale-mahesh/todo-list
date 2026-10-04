let inputTask = document.getElementById('user-input');
let todoList = document.getElementById('todo-list');
let addButton = document.getElementById('add-btn');

function addTodo() {
  const task = inputTask.value.trim();
  if (!task) {
    alert('Please enter task to do');
    return;
  }
  const li = document.createElement('li');
  li.innerHTML = getSingleTodoHtml(task);
  todoList.appendChild(li);
  inputTask.value = '';
}

function getSingleTodoHtml(task) {
  return `
    <input type='checkbox' class='todo-item-checkbox'>
      <span>${task}</span>
    <button class='todo-edit-btn'>Edit</button>
    <button class='todo-delete-btn'>X</button>
  `;
}

// Add todos
addButton.addEventListener('click', addTodo);
inputTask.addEventListener('keypress', (ev) => {
  if (ev.key === 'Enter') {
    addTodo();
  }
});

// Modify single todo
todoList.addEventListener('click', (e) => {
  if (e.target.className === 'todo-item-checkbox') {
    e.target.closest('li').classList.toggle('checked');
  }
  if (e.target.className === 'todo-edit-btn') {
    let updatedTask = prompt('Enter task: ');
    console.log(e.target.previousElementSibling.textContent);
    e.target.previousElementSibling.textContent = updatedTask;
  }
  if (e.target.className === 'todo-delete-btn') {
    e.target.parentElement.remove();
  }
});
