import express from "express"
import { todoListsController } from "./controllers/todoListsController.mjs"
import { tasksController } from "./controllers/tasksController.mjs"

export const router = express.Router()

// Uma página inicial de apresentação
// pagina inicial index /
router.get("/", (req, res) => res.render("index"))
// view index

// exibir todas as listas
// rota get /todo-lists/
router.get("/app/todo-lists/", todoListsController.index)
// view todo-lists

// Uma página para exibir as tarefas de uma lista específica
// view get /app/todo-lists/:listId
// rota get /app/todo-lists/:listId
router.get("/app/todo-lists/tasks/:listId", tasksController.index)

// Criação de novas listas de tarefas (cada lista agrupa suas próprias tarefas)
router.get("/app/todo-lists/new", (req, res) => res.render("create-list"))
// rota post /app/todo-lists/create
router.post("/app/todo-lists/create", todoListsController.create)
// rota delete /app/todo-lists/:listId
router.delete("/app/todo-lists/:listId", todoListsController.delete)
// view get /app/todo-lists/create

// Uma forma de adicionar, remover, deletar uma nova tarefa
// rota post /app/todo-lists/:listId/tasks
router.post("/app/todo-lists/tasks/:listId", tasksController.create)
// rota post/put /app/todo-lists/:listId/tasks/:taskId
router.post("/app/todo-lists/:listId/tasks/:taskId", tasksController.update)
// rota delete /app/todo-lists/:listId/tasks/:taskId
router.delete("/app/todo-lists/:listId/tasks/:taskId", tasksController.delete)
// Formas de marcar como concluída e excluir uma tarefa (botão, checkbox, etc)
