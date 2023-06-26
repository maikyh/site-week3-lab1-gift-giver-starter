const express = require("express")
const morgan = require("morgan")
const app = express()
const router = require('./routes/gift-exchange');
const { NotFoundError } = require('./utils/errors');

app.use(morgan("tiny"))
app.use(express.json())

app.get("/", async (req, res) => {
  res.json({ ping: "pong" })
})

app.use(`/gift-exchange`, router)

// 404 error handling middleware
app.use((req, res, next) => {
  next(new NotFoundError('Not found'));
});

// Generic error handling middleware
app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong in the application';

  res.status(status).json({ error: { status, message } });
});

module.exports = app