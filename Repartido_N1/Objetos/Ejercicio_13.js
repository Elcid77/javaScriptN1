const ambulancia = {
  id: 1,
  patente: 'SBD 1021',
  modelo: 'Renault Master',
  estado: 'disponible',
  kmRecorridos: 12400,
};

//Copia con propiedad cambiada y verificación del original
// a) Copia con estado cambiado
const ambulanciaEnServicio = { ...ambulancia, estado: 'en servicio' };
console.log(ambulanciaEnServicio.estado); // 'en servicio'
 
// b) El original no cambió
console.log(ambulancia.estado); // 'disponible'
 
// El spread crea un nuevo objeto. La propiedad 'estado' del original
// no es afectada porque los primitivos (strings, numbers) se copian por valor.

//Copia con dos propiedades modificadas
const ambulanciaActualizada = {
  ...ambulancia,
  estado: 'mantenimiento',
  kmRecorridos: ambulancia.kmRecorridos + 150,
};
console.log(ambulanciaActualizada.estado);       // 'mantenimiento'
console.log(ambulanciaActualizada.kmRecorridos); // 12550
console.log(ambulancia.kmRecorridos);            // 12400 (original intacto)

