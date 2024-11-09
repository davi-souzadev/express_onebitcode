import express from "express"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { router } from "./routes.mjs"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()

// Middleware para JSON
app.use(express.json())

// Configuração do EJS como view engine
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

// Configuração para ler dados do formulário
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Configuração para servir arquivos estáticos
app.use(express.static("public"))

app.use(router)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log("Server running on port...", PORT))
