import { taskModel } from "../models/taskModel.mjs"

export const tasksController = {
  // GET /todo-lists/tasks/:listId
  index: (req, res) => {
    try {
      const tasks = taskModel.getAll(req.params.listId)

      res.send(tasks)
    } catch (error) {
      res.status(500).send({ error: error.message })
    }
  },

  //POST /todo-lists/tasks/:listId
  create: (req, res) => {
    const { title, content } = req.body
    const todoListId = req.params.listId

    console.log(req.params)

    const task = taskModel.create(title, content, todoListId)
    taskModel.save(task)

    res.status(204).send(task)
  },

  update: (req, res) => {
    const modifiedTask = req.body
    const taskId = req.params.id

    taskModel.update(taskId, modifiedTask)
  },
}
