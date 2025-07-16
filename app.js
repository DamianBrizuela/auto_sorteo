const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
const {add_numbers, numbers_selected} = require('./manager')

// Ruta básica
app.get('/', (req, res) => {
    res.send('ok!!');
});

app.post('/add_number', (req, res) => {
    const { name, number, paid } = req.body;
    const numbers = Array.isArray(number) ? number : [number];
    const response = add_numbers(name, numbers, paid);
    
    res.json(response);
});

app.post('/get_numbers', (req, res) => {
  res.json(numbers_selected());
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
