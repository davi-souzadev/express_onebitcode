import express from "express"

const app = express()

//middleware do express
app.use(express.json())

app.use((req, res, next) => {
  console.log("PASSEI PELO MIDDLEWARE")
  req.middleWareA = "OK!"
  next()
})

app.get("/", (req, res) => {
  return res.status(200).send({
    message: "Sucesso!",
    middlewareObject: req.middleWareA,
  })
})

function middleWareB(req, res, next) {
  console.log("Passei pelo middleware B")
  req.middlewareB = "Teste middleware B"
  next()
}

app.get("/testeB", middleWareB, (req, res) => {
  return res.status(200).send({
    message: "Middlware B",
    middlewareObject: req.middleWareB,
  })
})

app.use((error, req, res, next) => {
  if (error) {
    console.log(error)
    res.status(400).json({
      message: error,
    })
  } else {
    next()
  }
})

app.listen(1234, () => console.log("Server is Running!..."))
