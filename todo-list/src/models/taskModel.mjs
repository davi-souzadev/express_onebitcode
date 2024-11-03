import crypto from 'crypto';

const tasks = [
    {id: crypto.randomUUID(), title: "Esta é uma tarefa", createdAt: new Date(), updatedAt: new Date(), done: false},
    {id: crypto.randomUUID(), title: "Esta é uma tarefa 2", createdAt: new Date(), updatedAt: new Date(), done: false},
    {id: crypto.randomUUID(), title: "Esta é uma tarefa 3", createdAt: new Date(), updatedAt: new Date(), done: true},
    {id: crypto.randomUUID(), title: "Esta é uma tarefa 4", createdAt: new Date(), updatedAt: new Date(), done: false},
]

export const taskModel = {
    getAll() {
        return tasks
    },

    getById(id) {
        return tasks.find(task => task.id === id)
    },

    create(title) {
        const task = {
            id: crypto.randomUUID(),
            title,
            createdAt: new Date(),
            updatedAt: new Date(),
            done: false,
        }

        return task
    },

    save(task) {
        tasks.unshift(task)
    },

    update(taskId, task) {
        const index = tasks.findIndex(t => t.id === taskId)

        tasks[index] = {
            ...tasks[index],
            ...task,
            updatedAt: new Date(),
        }
    },

    delete(taskId) {
        tasks = tasks.filter(task => task.id !== taskId)
    }
}