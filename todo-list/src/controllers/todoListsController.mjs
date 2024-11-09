import { todoModel } from "../models/todoModel.mjs"

export const todoListsController = {
  // GET /todo-lists/
  index: (req, res) => {
    const lists = todoModel.getAll()

    res.send(lists)
  },

  // GET /todo-lists/:listId
  show: (req, res) => {
    const list = todoModel.getById(req.params.listId)

    res.send(list)
  },

  create: (req, res) => {},

  // DELETE /todo-lists/:listId
  delete: (req, res) => {
    todoModel.delete(req.params.id)

    res.status(200).send([])
  },
}
