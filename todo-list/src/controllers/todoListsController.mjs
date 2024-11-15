import { todoModel } from "../models/todoModel.mjs"

export const todoListsController = {
  // GET /todo-lists/
  index: (req, res) => {
    const lists = todoModel.getAll()

    res.render("app", { lists })
  },

  // GET /todo-lists/:listId
  show: (req, res) => {
    const list = todoModel.getById(req.params.listId)

    res.send(list)
  },

  create: (req, res) => {
    try {
      const { title } = req.body
      const list = todoModel.create(title)
      todoModel.save(list)

      res.redirect("/")
      // res.status(201).send({
      //   success: "success",
      // })
    } catch (error) {
      res.status(500).send({
        error: error.message,
      })
    }
  },

  // DELETE /todo-lists/:listId
  delete: (req, res) => {
    try {
      todoModel.delete(req.params.listId)

      res.status(200).send({
        success: "success",
      })
    } catch (error) {
      res.status(500).send({
        error: error.message,
      })
    }
  },
}
