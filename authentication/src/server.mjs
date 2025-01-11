import express from "express"
import session from "express-session"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { router } from "./routes/routes.mjs"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()

// Configuração do EJS como view engine
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(express.urlencoded({ extended: true }))

app.use(
  session({
    secret: "palavra-chave",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
)

app.use(router)

const PORT = process.env.PORT || 1234

app.listen(PORT, () => console.log("Server running on port...", PORT))
