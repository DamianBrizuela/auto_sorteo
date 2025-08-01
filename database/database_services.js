const { Cuadro } = require("./database");

async function save_register(numbers, _buyer, _paid, _phone, _obsv) {

    for (const number of numbers){
        Cuadro.create({
            buyer: _buyer,
            number: number,
            paid: _paid,
            phone: _phone,
            obsv: _obsv
        });
    }
    console.log('Register numbers ${availables} added!')
}

async function get_numbers() {
    return await Cuadro.findAll();
}


// Exporta los modelos y la conexión
module.exports = { 
    save_register,
    get_numbers
};