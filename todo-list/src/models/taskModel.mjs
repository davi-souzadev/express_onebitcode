import crypto from "crypto"
import { todoModel } from "./todoModel.mjs"

// const tasks = []
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

  update(taskId, listId, task) {
    const tasks = todoModel.getById(listId)?.tasks
    const index = tasks.findIndex((t) => t.id === taskId)

    tasks[index] = {
      ...tasks[index],
      ...task,
      updatedAt: new Date(),
    }
  },

  delete(taskId, listId) {
    let list = todoModel.getById(listId)

    if (!list) return

    list.tasks = list.tasks.filter((task) => task.id !== taskId)
  },
}
