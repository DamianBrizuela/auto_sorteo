const express = require('express');
const router = express.Router();
const NumericRecord = require('../models/numeric.model');

router.post('/add_number', async (req, res) => {
    try {
        // const {numbers, buyer, phone, obsv, paid } = req.body;
        const newNumericRecord = await NumericRecord.create(req.body);
        res.json(newNumericRecord);
    } catch (err) {
        console.log(err);
        res.status(400).json({error: err.message});
    }
});

router.post('/get_numbers', async (req, res) => {
    const cuadros = await NumericRecord.findAll();
    res.json(cuadros);
  });
  
  module.exports = router;