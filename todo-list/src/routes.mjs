import express from "express"
import { todoListsController } from "./controllers/todoListsController.mjs"
import { tasksController } from "./controllers/tasksController.mjs"

export const router = express.Router()

// Uma página inicial de apresentação
// pagina inicial index /
// view index

// exibir todas as listas
// rota get /todo-lists/
router.get("/todo-lists/", todoListsController.index)
// view todo-lists

// Uma página para exibir as tarefas de uma lista específica
// view get /todo-lists/:listId
// rota get /todo-lists/:listId
router.get("/todo-lists/tasks/:listId", tasksController.index)

// Criação de novas listas de tarefas (cada lista agrupa suas próprias tarefas)
// rota post /todo-lists/create
// rota delete /todo-lists/:listId
// view get /todo-lists/create

// Uma forma de adicionar, remover, deletar uma nova tarefa
// rota post /todo-lists/:listId/tasks
router.post("/todo-lists/tasks/:listId", tasksController.create)
// rota post/put /todo-lists/:listId/tasks/:taskId
router.post("/todo-lists/:listId/tasks/:taskId", tasksController.update)
// rota delete /todo-lists/:listId/tasks/:taskId
router.delete("/todo-lists/:listId/tasks/:taskId", tasksController.delete)
// Formas de marcar como concluída e excluir uma tarefa (botão, checkbox, etc)
