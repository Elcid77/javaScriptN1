
// Función tradicional y función flecha.

function sumar(a,b){
    return a+b;
}

console.log(sumar(2,3));

// Al ser una única expresión, puedo omitir el return y convertirlo en un retorno implícito.
// const sumar = (a,b) => { return a + b; };

const sumar2 = (a,b) => a + b;

console.log(sumar2(2,3));

// Función con un único parámetro.

function doble(n){
    return n * 2;
}

// Al recibir un único parámetro, los paréntesis son opcionales.

const doble2 = n => n * 2;

// Funciones sin parámetros.

function saludar(){
    return "Buenas noches";
}

// Al no recibir parámetros, los paréntesis son obligatorios.
const saludar2 = () => "Buenas noches";

console.log(saludar2('Felipe'));



/*
RETORNO IMPLÍCITO

Las 4 reglas:

Para poder usar un retorno implícito, se deben cumplir estas 4 condiciones simultáneamente:

1. Una sola expresión:
   Debe existir una única operación que devuelva un valor.
   No importa si se distribuye en varias líneas para mejorar la legibilidad; debe seguir siendo una única expresión evaluable.

2. Sin estructuras de control:
   No se pueden utilizar if, for, while, etc.
   Para condiciones, únicamente se permite el operador ternario (? :).

3. Sin llaves {} ni la palabra return:
   Al eliminar las llaves, el retorno se realiza automáticamente.
   Si se utilizan llaves, será necesario escribir return explícitamente.

4. Objetos entre paréntesis ({ ... }):
   Si se retorna un objeto literal, es obligatorio envolverlo entre paréntesis para que JavaScript no confunda las llaves del objeto con las llaves de un bloque de código.
*/

const edad=18


/*function mayorEdad(edad){

if (edad>=18){
console.log( "Es mayor de edad")
}else{
console.log("Es menor de edad")   
}
}*/

const resultado = edad => {
    
if (edad>=18){
console.log( "Es mayor de edad")
}else{
console.log("Es menor de edad")   
}
}
console.log(resultado(25));


const resultado2= edad=>edad>=18 ? "Es mayor de edad": "Es menor de edad";