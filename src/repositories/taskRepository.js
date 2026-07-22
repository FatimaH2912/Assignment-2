const tasks = [
    { id: 1, title: "Complete Assignment", done: false },
    { id: 2, title: "Buy Plush Toy", done: false },
    { id: 3, title: "Watch Movie", done: false }
];

function getAllTasks() {
    return tasks;
}

function getTaskById(id) {
    return tasks.find(task => task.id === id);
}

function createTask(title) {
    const newTask = {
        id: tasks.length + 1,
        title,
        done: false
    };

    tasks.push(newTask);
    return newTask;
}

function updateTask(id, title, done) {
    const task = getTaskById(id);

    if (!task) return null;

    task.title = title;
    task.done = done;

    return task;
}

function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);

    if (index === -1) return false;

    tasks.splice(index, 1);
    return true;
}

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};