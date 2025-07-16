const { save_register, get_numbers } = require("./database/database_services");



async function numbers_selected() {
    const numbers = await get_numbers();
    return numbers.map(c => c.toJSON());

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