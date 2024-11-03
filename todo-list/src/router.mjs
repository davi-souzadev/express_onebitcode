import express from 'express'

export const router = express.Router()

router.get("/")


// Uma página inicial de apresentação
// pagina inicial index /
// view index

// exibir todas as listas
// rota get /todo-lists/
// view todo-lists

// Uma página para exibir as tarefas de uma lista específica
// view get /todo-lists/:listId
// rota get /todo-lists/:listId

// Criação de novas listas de tarefas (cada lista agrupa suas próprias tarefas)
// rota post /todo-lists/create
// rota delete /todo-lists/:listId
// view get /todo-lists/create

// Uma forma de adicionar, remover, deletar uma nova tarefa
// rota post /todo-lists/:listId/tasks
// rota post/put /todo-lists/:listId/tasks/:taskId
// rota delete /todo-lists/:listId

// Formas de marcar como concluída e excluir uma tarefa (botão, checkbox, etc)
