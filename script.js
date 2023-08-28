const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');
    li.innerHTML = `
      ${taskText}
      <button class="delete-btn">Удалить</button>
    `;
    taskList.appendChild(li);
    taskInput.value = '';

    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
      taskList.removeChild(li);
    });
  }
}
