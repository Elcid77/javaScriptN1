
//Creación de un objeto literal
const usuario = {

    nombre: "Carlos",
    edad: 28,
    esPremium : true,
    hobbies: [ "leer", "correr"]
};
//Acceder a los datos

console.log(usuario.nombre);


const auto = { marca: "Toyota", modelo: "Corolla" };

// Modificar un valor existente
auto.modelo = "Yaris";

// Agregar una propiedad completamente nueva
auto.anio = 2024;

// Eliminar una propiedad
delete auto.marca;

console.log(auto); 
// → { modelo: "Yaris", anio: 2024 }