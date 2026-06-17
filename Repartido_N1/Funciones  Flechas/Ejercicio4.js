// Parámetros de entrada:
// id        → número identificador de la ambulancia
// patente   → string con la patente (ej: 'ABC 1234')
// modelo    → string con el modelo  (ej: 'Renault Master')
 
// El objeto que debe retornar tiene esta forma:
// {
//   id: ...,
//   patente: ...,
//   modelo: ...,
//   estado: 'disponible',   // siempre disponible al registrarse
//   kmRecorridos: 0          // siempre 0 al registrarse
// }

// EJERCICIO A
function crearAmbulancia(id,patente, modelo){
return { id:id,
         patente:patente,
         modelo: modelo,
         estado: 'disponible',
         KmRecorrido: 0, 
}

}

const ambulacia = crearAmbulancia(25,'35678','f30');
console.log(ambulacia);

// EJERCICIO B

const crearAmbulancia2= (id,patente, modelo) =>( { id:id,
         patente:patente,
         modelo: modelo,
         estado: 'disponible',
         KmRecorrido: 0, 
})

console.log( crearAmbulancia2(20,'RX3524', 'F35'))