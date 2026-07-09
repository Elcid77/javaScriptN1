/* a. Accedé e imprimí en consola el nombre completo 
del paciente (nombre + apellido).
b. Accedé e imprimí la cantidad de traslados previos y su 
última alergia registrada.
c. Modificá el valor de ultimoDestino a 'Emergencias'.
d. Agregá una nueva propiedad telefono con el valor '099 123 456' al objeto paciente.
e. Agregá una nueva alergia 'aspirina' al arreglo de alergias sin reemplazar el arreglo completo.
f. Agregá la propiedad ultimaActualizacion con la fecha y hora actual. Usá new Date().toISOString()
 */

const paciente = {
  id: 7,
  nombre: 'Roberto',
  apellido: 'Méndez',
  ci: '6.789.012-4',
  activo: true,
  historial: {
    cantidadTraslados: 3,
    ultimoDestino: 'CTI',
    alergias: ['penicilina', 'ibuprofeno'],
  },
};

console.log(`El nombre y apellido es  ${paciente.nombre} ${paciente.apellido}`);

const aux= (paciente.historial.alergias.length)-1
console.log(aux);
console.log(`Cantidad de traslados  ${paciente.historial.cantidadTraslados} y su ultima alergia es  ${paciente.historial.alergias[aux]}`);
paciente.historial.ultimoDestino= 'Emergencia';
paciente.telefono= '099 123 456';
paciente.historial.alergias.push('Aspirina');
paciente.ultimaActualizacion= new Date().toISOString();

console.log(paciente);
