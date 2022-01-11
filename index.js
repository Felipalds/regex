
const string = "Fármacia do Luizi _ em-toledo@cascavel"


const new_string = string.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9 ]/g, " ")

console.log(new_string)