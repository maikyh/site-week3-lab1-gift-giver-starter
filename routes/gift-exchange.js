const express = require('express');
const router = express.Router();
const GiftExchange = require('../models/gift-exchange');
const { BadRequestError } = require('../utils/errors');

router.post('/pairs', (req, res, next) => {
  const names = req.body.names;

  try {
    if (!names || !Array.isArray(names)) {
      throw new BadRequestError('Invalid request body. "names" must be an array.');
    }

    const pairings = GiftExchange.pairs(names);
    res.status(200).json(pairings);
  } catch (error) {
    next(error);
  }
});

router.post('/traditional', (req, res, next) => {
  const names = req.body.names;

  try {
    if (!names || !Array.isArray(names)) {
      throw new BadRequestError('Invalid request body. "names" must be an array.');
    }

    const pairings = GiftExchange.traditional(names);
    res.status(200).json(pairings);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
