const { Cuadro } = require("./database");

async function save_register(_number, _buyer, _paid, ) {
    Cuadro.create({
        buyer: _buyer,
        number: _number,
        paid: _paid
    });
    console.log('Register number added!')
}

async function get_numbers() {
    return await Cuadro.findAll();
}


// Exporta los modelos y la conexión
module.exports = { 
    save_register,
    get_numbers
};