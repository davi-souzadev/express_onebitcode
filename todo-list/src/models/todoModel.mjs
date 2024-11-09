import crypto from "crypto"

const todosList = [
  {
    id: "1",
    title: "Esta é uma lista",
    createdAt: new Date(),
    updatedAt: new Date(),
    tasks: [],
  },
  {
    id: crypto.randomUUID(),
    title: "Esta é uma lista 2",
    createdAt: new Date(),
    updatedAt: new Date(),
    tasks: [],
  },
  {
    id: crypto.randomUUID(),
    title: "Esta é uma lista 3",
    createdAt: new Date(),
    updatedAt: new Date(),
    tasks: [],
  },
  {
    id: crypto.randomUUID(),
    title: "Esta é uma lista 4",
    createdAt: new Date(),
    updatedAt: new Date(),
    tasks: [],
  },
]

export const todoModel = {
  getAll() {
    return todosList
  },

  getById(id) {
    return todosList.find((task) => task.id === id)
  },

  create(title) {
    const newList = {
      id: crypto.randomUUID(),
      title,
      createdAt: new Date(),
      updatedAt: new Date(),
      tasks: [],
    }

    return newList
  },

  save(todoList) {
    todosList.unshift(todoList)
  },

  update(todoListId, task) {
    const index = todosList.findIndex((t) => t.id === todoListId)

    console.log("------------todoModel -> UPDATE------------")
    console.log(task)
    console.log("------------------------")

    const currentTasks = todosList[index]?.tasks
    currentTasks.unshift(task)

    todosList[index] = {
      ...todosList[index],
      tasks: currentTasks,
      updatedAt: new Date(),
    }
  },

  delete(todoListId) {
    todosList = todosList.filter((todoList) => todoList.id !== todoListId)
  },
}
