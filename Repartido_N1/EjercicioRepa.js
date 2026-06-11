
const frutas = ["manzana", "uva", "naranja", "banana"];
//                  0       1       2       3   

console.log(frutas);

// Agregar elmento

frutas.push("limón");

// Iteraración. No Mutable. Callback 

frutas.forEach(f => console.log(f));


const frutasM = frutas.map(f => f.toUpperCase());
console.log(frutasM)
console.log(frutas);

const frutasLargo = frutas.filter(f => f.length === 3);
console.log(frutasLargo);

// OBJETOS

const profesor = {
    nombre: "Leonardo",
    edad: 25,
    esEfectivo: true,
    materias: ["Programación web ", "Taller"],
    direccion: {
        calle: "Carabelas",
        numero: 2000,
    },

}

profesor.nombre = "Juan";
console.log(profesor.nombre);
console.log(Object.keys(profesor));
console.log(Object.values(profesor));
console.log(Object.entries(profesor));

for ([clave, valor] of Object.entries(profesor)) {

    if (typeof valor === 'object' && valor !== null) {

        for ([subClave, subValor] of Object.entries(valor)){
            console.log(`${subClave} : ${subValor}`);
        }
    } else {
        console.log(`${clave} : ${valor}`);
    }
}


