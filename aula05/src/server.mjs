import express from "express";
import url from "node:url";
import path from "node:path";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = 3000;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// USANDO RECURSO PARA DITAR AO EXPRESS QUE OS DADOS VIRAO VIA URL
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const message = "Informação inserida dinamicamente";

  res.render("index", { message });
});

app.get("/form", (req, res) => {
  res.render("form");
});

const users = [];

app.get("/form-infos", (req, res) => {
  res.render("formInfos", { users });
});

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username,
    password,
  });

  res.redirect("form-infos");
});

app.listen(PORT, () => console.log("Server running"));
