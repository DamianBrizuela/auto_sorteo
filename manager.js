const { save_register, get_numbers } = require("./database/database_services");



async function numbers_selected() {
    const numbers = await get_numbers();
    return numbers.map(c => c.toJSON());

}

async function add_numbers(name, numbers, paid, phone, obsv) {
    
        let selected = await numbers_selected();
        let availables= numbers.filter(number => !selected.includes(number));
        let availables2 = [];

        for (let numb of numbers) {
            if (!selected.includes(numb)){
                availables2.push(numb)
            }
        }

        console.log("numeros seleccionados por el comprador: ", numbers);
        console.log("Disponibles para comprar: ", availables);
        console.log("Disponibles para comprar 2: ", availables2);
        // await save_register(availables, name, paid, phone, obsv);
};

async function numbers_picked(){
    response = await numbers_selected();
    const selected = response.map(item => Number(item.number))
    return selected;
}

module.exports = {
    add_numbers,
    numbers_selected,
    numbers_picked
}