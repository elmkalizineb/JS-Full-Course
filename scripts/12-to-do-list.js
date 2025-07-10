const todoList = [{
    name: 'make dinner',
    dueDate: '2022-12-22'
}, {
    name: 'wash dishes',
    dueDate: '2022-12-22'
}];


function renderTodoList() {
    let todoListHTML = '';

    todoList.forEach((todoObject, index) => {
        const { name, dueDate } = todoObject;
        const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button delete-button">Delete</button> 
    `;
        todoListHTML += html;
    });

    document.querySelector('.to-do-list')
        .innerHTML = todoListHTML;

    document.querySelectorAll('.delete-button')
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => {
                todoList.splice(index, 1);
                renderTodoList();
            });
        });
}

document.querySelector('.add-button')
    .addEventListener('click', () => {
        addTodo();
    });

function addTodo() {
    const inputElement = document.querySelector('.todo-input-name');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.todo-input-date');
    const dueDate = dateInputElement.value;

    todoList.push({
        //name: name,
        //dueDate: dueDate,
        name,
        dueDate
    });

    inputElement.value = '';

    renderTodoList();
}
