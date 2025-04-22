document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.querySelector('.theme-toggle');
    const addBtn = document.querySelector('.add-btn');
    const taskInput = document.getElementById('taskInput');
    const todoList = document.getElementById('todoList');

    // Theme toggle
    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('light');
    });

    // Add task
    addBtn.addEventListener('click', () => {
      const taskText = taskInput.value.trim();
      if (taskText === '') return;

      const li = document.createElement('li');
      li.innerHTML = `${taskText} <button class="delete-btn">✖</button>`;
      todoList.appendChild(li);
      taskInput.value = '';
    });

    // Delete task using event delegation
    todoList.addEventListener('click', (e) => {
      if (e.target.classList.contains('delete-btn')) {
        const li = e.target.closest('li');
        li.remove();
      }
    });
  });