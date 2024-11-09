import crypto from "crypto"
import { todoModel } from "./todoModel.mjs"

const tasks = []
// {
//   id: crypto.randomUUID(),
//   title: "Esta é uma tarefa",
//   createdAt: new Date(),
//   updatedAt: new Date(),
//   done: false,
// },
// {
//   id: crypto.randomUUID(),
//   title: "Esta é uma tarefa 2",
//   createdAt: new Date(),
//   updatedAt: new Date(),
//   done: false,
// },
// {
//   id: crypto.randomUUID(),
//   title: "Esta é uma tarefa 3",
//   createdAt: new Date(),
//   updatedAt: new Date(),
//   done: true,
// },
// {
//   id: crypto.randomUUID(),
//   title: "Esta é uma tarefa 4",
//   createdAt: new Date(),
//   updatedAt: new Date(),
//   done: false,
// },

export const taskModel = {
  getAll(listId) {
    const tasks = todoModel.getById(listId)?.tasks

    return tasks ? tasks : []
  },

  // getById(id) {
  //     return tasks.find(task => task.id === id)
  // },

  create(title, content, todoListId) {
    const task = {
      id: crypto.randomUUID(),
      todoListId,
      title,
      content,
      createdAt: new Date(),
      updatedAt: new Date(),
      done: false,
    }

    return task
  },

  save(task) {
    // console.log(task)
    todoModel.update(task.todoListId, task)
  },

  update(taskId, task) {
    const index = task.findIndex((t) => t.id === taskId)

    task[index] = {
      ...task[index],
      ...task,
      updatedAt: new Date(),
    }
  },

  delete(taskId) {
    tasks = tasks.filter((task) => task.id !== taskId)
  },
}
