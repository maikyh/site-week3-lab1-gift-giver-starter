const express = require('express');
const router = express.Router();
const GiftExchange = require('../models/gift-exchange');

router.post('/pairs', (req, res) => {
  const names = req.body.names;

  try {
    const pairings = GiftExchange.pairs(names);
    res.status(200).json(pairings);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/traditional', (req, res) => {
  const names = req.body.names;

  try {
    const pairings = GiftExchange.traditional(names);
    res.status(200).json(pairings);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
