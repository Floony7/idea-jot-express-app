const express = require("express")
const exphbs = require("express-handlebars")
const mongoose = require("mongoose")

const connectDB = require("./config/db")
const app = express()

// Load model
require("./models/Idea")
const Idea = mongoose.model("ideas")

// Database connection
connectDB()
// Handlebars Middleware
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
  })
)
app.set("view engine", "handlebars")

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())

app.get("/", (req, res) => {
  const title = "Vitejte"
  res.render("index", {
    title,
  })
})

app.get("/about", (req, res) => {
  res.render("about")
})

// Add idea form route
app.get("/ideas/add", (req, res) => {
  res.render("ideas/add")
})

app.get("/ideas", (req, res) => {
  res.render("ideas/ideas")
})

// Process form
app.post("/ideas", (req, res) => {
  res.send("okay")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})
