const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
const {add_numbers, numbers_selected, numbers_picked} = require('./manager')


// app.use(express.static('public'));

app.post('/add_number', async (req, res) => {
    const { name, number, paid, phone, obsv } = req.body;
    var numbers = Array.isArray(number) ? number : [number];
    var response = await add_numbers(name, numbers, paid, phone, obsv);

    res.json(response);
});

app.post('/get_numbers', async (req, res) => {
    try {
        response = await numbers_selected();
        res.json(response);   
    } catch (err) {
        console.error(err);
        res.status(500).json({error: 'error al obtener datos'});
    }
});

app.post('/get_numbers_selected', async (req, res) => {
    try {
        let selected= await numbers_picked();
        res.json(selected);
    } catch (err) {
        console.error(err);
        res.status(500).json({error: 'error al obtener datos'});
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
