let $todoInput;// place, where user types new task
let $alertInfo;// info about no tasks
let $addBtn;// button add , adds new elements to the list
let $ulList;// tasks list, <ul></ul> tags
let $newTask;// new li, 
let $popup;// takes popup 
let $popupInfo// empty popup confirm alert
let $editedTodo;// todo editor 
let $popupInput;// popup input value
let $addPopupBtn;// popup confirm button
let $closeTodoBtn;// popup cloaseing button
let $idNumber = 0;
let $allTasks;
const main = () => {
    prepareDOMElements();
    prepareDOMEvents();    
};

const prepareDOMElements = () => {
    $todoInput = document.querySelector('.todoInput');
    $alertInfo = document.querySelector('.alertInfo');
    $addBtn = document.querySelector('.addBtn');
    $ulList = document.querySelector('.todoList ul'); 
    $popup = document.querySelector('.popup');
    $popupInfo = document.querySelector('.popupInfo');
    $popupInput = document.querySelector('.popupInput');
    $addPopupBtn = document.querySelector('.accept');
    $closeTodoBtn = document.querySelector('.cancel');
    $allTasks = $ulList.getElementsByTagName('li');
};
const prepareDOMEvents = () => {
    $addBtn.addEventListener('click', addNewTask); 
    $ulList.addEventListener('click', checkClick); $closeTodoBtn.addEventListener('click', cloesePopup);
    $addPopupBtn.addEventListener('click', changeTodo);
    $todoInput.addEventListener('keyup',enterConfirm);
};
const addNewTask = () => {
    if ($todoInput.value !== ''){
        $idNumber++;
        $newTask = document.createElement('li');
        $newTask.innerText = $todoInput.value;
        $newTask.setAttribute('id',`todo-${$idNumber}`);
        $ulList.appendChild($newTask);
        
        $todoInput.value = ''
        $alertInfo.innerText = ''
        createToolsAera();
    } else {
        $alertInfo.innerText = 'Wpisz treść zadania!';   
    }
};

const enterConfirm = () => {
    if(event.keyCode === 13 ){
        addNewTask()
    }
};

const createToolsAera = () => {
    const toolsPanel = document.createElement('div');
    toolsPanel.classList.add('tools');
    $newTask.appendChild(toolsPanel);
    
    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete');
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';
    
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit');
    editBtn.innerText = 'EDIT';
    
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
    
    toolsPanel.appendChild(completeBtn);
    toolsPanel.appendChild(editBtn);
    toolsPanel.appendChild(deleteBtn);
}

const checkClick = (e) => {
    if (e.target.closest('button').classList.contains('complete')) {
        e.target.closest('li').classList.toggle('completed');
        e.target.closest('button').classList.toggle('completed')
        } else if (e.target.closest('button').className === 'edit'){ 
        editTask(e);
        } else if (e.target.closest('button').className === 'delete'){
        deleteTask(e);    
        }
}

const editTask = (e) => {
    const oldTodo = e.target.closest('li').id;
    $editedTodo = document.getElementById(oldTodo);
    $popupInput.value = $editedTodo.firstChild.textContent;
    $popup.style.display = 'flex';
};

const changeTodo = () => {
    if ($popupInput.value !== ''){
        $editedTodo.firstChild.textContent = $popupInput.value;
        $popup.style.display = 'none';
        $popupInfo.innerText = '';
    } else {
        $popupInfo.innerText = 'Musisz podać jakąś treść!'
    };
};

const cloesePopup = () => {
    $popup.style.display = 'none';
};

const deleteTask = (e) => {
    const deleteTodo = e.target.closest('li');
    deleteTodo.remove();
    
    if ($allTasks.length === 0) {
        $alertInfo.innerText = 'Brak zadań na liście.';
        }
    
}

document.addEventListener('DOMContentLoaded', main);
