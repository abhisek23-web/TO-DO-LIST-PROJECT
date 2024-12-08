const todoList=[{
    name:'make dinner',
    dueDate:'2022-12-22'
},{
    name: 'wash dishes',
  dueDate: '2022-12-22'
}];
renderTodoList();

function renderTodoList(){
    let todoListHtml='';
   todoList.forEach(function(todoObject,i){
    
    const {name,dueDate}=todoObject;
    const html=`<div>${name}</div><div>${dueDate}</div><button onclick="todoList.splice(${i},1);
    renderTodoList();"class="delete-todo-button">Delete</button>`
      todoListHtml+=html;
   });
   document.querySelector('.js-todo-list')
   .innerHTML = todoListHtml;
}
function addTodo(){
    const inputele=document.querySelector('.js-name-input');
    const name=inputele.value;
    const dateele=document.querySelector('.js-due-date-input');
    const dueDate=dateele.value;
    todoList.push({
        name,
        dueDate
    });
    inputele.value='';
    renderTodoList();
}