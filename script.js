// script.js
document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('task-form');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Add a new task
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const taskText = taskInput.value;

    if (taskText.trim() === '') {
      alert('Please enter a task.');
      return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
      ${taskText}
      <button class="delete-btn">Delete</button>
    `;

    taskList.appendChild(li);
    taskInput.value = '';

    // Add delete functionality to the new task
    li.querySelector('.delete-btn').addEventListener('click', () => {
      li.remove();
    });
  });

  // Delete a task when clicking the delete button
  taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
      e.target.parentElement.remove();
    }
  });
});
