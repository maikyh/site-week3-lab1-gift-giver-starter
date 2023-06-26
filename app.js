const express = require("express")
const morgan = require("morgan")
const app = express()
const router = require('./routes/gift-exchange');

app.use(morgan("tiny"))
app.use(express.json())

app.get("/", async (req, res) => {
  res.json({ ping: "pong" })
})

app.use(`/gift-exchange`, router)

module.exports = app    