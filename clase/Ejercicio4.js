

/* El sistema necesita una función de 
fábrica (factory function) que genere objetos ambulancia 
con los datos básicos para registrar una nueva unidad en la flota. */

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

const ambulacia = function crearAmbulancia(id,patente,modelo ){
    id:0,
    patente: patente,
    modelo: modelo,
    estado: 'disponible',
    kmRecorridos: 0  
}