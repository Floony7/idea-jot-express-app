const express = require("express")
const exphbs = require("express-handlebars")
const mongoose = require("mongoose")
const app = express()

// Handlebars Middleware
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
  })
)
app.set("view engine", "handlebars")

app.get("/", (req, res) => {
  const title = "Vitejte"
  res.render("index", {
    title,
  })
})

app.get("/about", (req, res) => {
  res.render("about")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})
