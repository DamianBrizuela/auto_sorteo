const { Cuadro } = require("./database");

async function save_register(_number, _buyer, _paid, ) {
    console.log(`${_number}: ${_buyer} -> ${_paid}`);
    Cuadro.create({
        buyer: _buyer,
        number: _number,
        paid: _paid
    });
}

async function numbers_selected() {
    const numbers = await Cuadro.findAll();
    console.log('contenido: ', numbers.map(c => c.toJSON()));
    return numbers;

}

function add_numbers(name, numbers, paid) {
    not_available= [];
    selected= [];
    (async () => {
        // recorro los numeros y almaceno cada uno
        for (const number of numbers){
            await save_register(number, name, paid);
        }
    })();
    
}

module.exports = {
    add_numbers,
    numbers_selected
}