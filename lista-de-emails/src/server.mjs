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

let users = [];

app.get("/users", (req, res) => {
  res.render("users", { users });
});

app.get("/success", (req, res) => {
  res.render("success");
});

app.post("/register", (req, res) => {
  const email = req.body.email;

  users.push({
    email,
  });

  res.redirect("success");
});

app.post("/users/delete", (req, res) => {
  const email = req.body.email;

  console.log(email);

  if (email) {
    users = users.filter((user) => user.email !== email);

    res.redirect("/users");
    // res.status(200).send("success");
  }

  res.redirect("/users");
  // res.status(404).send("failure");
});

app.listen(PORT, () => console.log("Server running"));
