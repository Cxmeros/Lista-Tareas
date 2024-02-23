const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

//tasks container

const tasksContainer = document.getElementById('tasksContainer');

const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es', {day: 'numeric'});
    dateText.textContent = date.toLocaleString('es', {weekday: 'long'});
    dateMonth.textContent = date.toLocaleString('es', {month: 'short'});
    dateYear.textContent = date.toLocaleString('es', {year: 'numeric'});
};

const addNewTask = event => {
    //evitar que el formulario recargue la página
    event.preventDefault();
    //obtener el valor del input
    const { value } = event.target.taskText;
    //evitar agregar tareas vacías
    if (!value) return;

    //crear un nuevo elemento con el valor del input
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState);
    task.textContent = value;
    //agregar el nuevo elemento al contenedor de tareas
    //prepend agrega el elemento al inicio del contenedor
    tasksContainer.prepend(task);
    //limpiar el input
    event.target.reset();
};

const changeTaskState = event => {
    event.target.classList.toggle('done');
};

const order = () => {
    const done = [];
    const toDo = [];
    tasksContainer.childNodes.forEach( el => {
        el.classList.contains('done') ? done.push(el) : toDo.push(el);
    
    });
    //para ordenar las tareas hechas al final
    //se utiliza el spread operator para unir los dos arrays
    return [...toDo, ...done];
};

const renderOrderedTasks = () => {
    //se agregan las tareas ordenadas al contenedor
    order().forEach( el => tasksContainer.appendChild(el));

}

setDate();