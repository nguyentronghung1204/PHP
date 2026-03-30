class ToDoList {
    constructor() {
        this.tasks = this.getTasks(); // Load tasks from local storage.
    }

    getTasks() {
        const tasksJson = localStorage.getItem('tasks');
        return tasksJson ? JSON.parse(tasksJson) : [];
    }

    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    addTask(task) {
        this.tasks.push({ task, completed: false });
        this.saveTasks();
    }

    deleteTask(index) {
        this.tasks.splice(index, 1);
        this.saveTasks();
    }

    toggleTaskCompletion(index) {
        this.tasks[index].completed = !this.tasks[index].completed;
        this.saveTasks();
    }
}

// Example usage
const todoList = new ToDoList();

todoList.addTask('Learn JavaScript');
todoList.addTask('Build ToDo List App');
console.log(todoList.tasks);