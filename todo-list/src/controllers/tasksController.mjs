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
    try {
      const { title, content } = req.body
      const todoListId = req.params.listId

      console.log(req.params)

      const task = taskModel.create(title, content, todoListId)
      taskModel.save(task)

      res.status(204).send(task)
    } catch (error) {
      res.status(500).send({ error: error.message })
    }
  },

  // POST /todo-lists/:listId/tasks/:taskId
  update: (req, res) => {
    const modifiedTask = req.body
    const taskId = req.params.taskId
    const listId = req.params.listId

    taskModel.update(taskId, listId, modifiedTask)

    res.status(200).send({
      success: "success",
    })
  },

  // DELETE /todo-lists/:listId/tasks/:taskId
  delete: (req, res) => {
    try {
      const taskId = req.params.taskId
      const listId = req.params.listId

      taskModel.delete(taskId, listId)

      res.status(200).send({
        success: "success",
      })
    } catch (error) {
      res.status(500).send({ error: error.message })
    }
  },
}
