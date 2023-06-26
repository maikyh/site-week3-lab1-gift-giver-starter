const express = require('express');
const router = express.Router();

router.post('/pairs', async (req, res) => {
  res.status(200).json(req.body.names);
});

router.post('/traditional', async (req, res) => {
  res.status(200).json(req.body.names);
});

module.exports = router;