//Lista de tareas
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

//Función para llevar las tareas
export const getTasks = () => tasks;

//Función para agregar una tarea
export const addTask = (tasks) => {
    const newtask = {
        id:Date.now(),
        text:tasks,
        completed:false,
    };
    tasks.push(newtasks);
    localStorage.setlte,("tasks", JSON.stringify(tasks));
}