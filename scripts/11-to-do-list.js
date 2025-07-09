const todoList = [];

function renderTodoList() {
    let todoHtml = ``;

    for (let i = 0; i < todoList.length; i++) {

        const html = `
        
         <div >${todoList[i].name} </div >
            
        <div > ${todoList[i].dueDate} </div >
         
         <button onclick = " 
            todoList.splice(${i},1);
            renderTodoList ();
         " class="delete-button"
         >Delete</button>
        
        `;
            todoHtml+=html;
        }

        document.querySelector(".to-do-list").innerHTML = todoHtml;
    }

    function addTodo() {
        const inputElementName = document.querySelector(".todo-input-name");
        const inputElementDate = document.querySelector(".todo-input-date");

        const data = {
            name:``,
            dueDate:``
        }
        data.name = inputElementName.value;
        data.dueDate = inputElementDate.value;

        todoList.push(data );

        console.log(todoList);

        inputElementName.value = "";
        inputElementDate.value = "";

        renderTodoList();
    }







