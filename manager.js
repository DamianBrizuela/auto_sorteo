var numbers_selected = {};
function add_user(name, numbers, paid) {
    not_available= [];
    selected= [];
    for (const number of numbers){
        if (numbers_selected.hasOwnProperty(number)){
            not_available.push(number);
        } else {
            numbers_selected[number] = {
                "name": name,
                "paid": paid
            }
            selected.push(number);
        }
    }
    return ({
        'not_available': not_available,
        'available': selected
    })
}

module.exports = add_user