
const traslado = {
  id: 3,
  pacienteId: 2,
  ambulanciaId: 4,
  medico: 'Dr. Pérez',
  distanciaKm: 2.5,
  fecha: '2026-06-03',
  estado: 'completado',
};
 
const colores = ['azul', 'blanco', 'naranja'];



// a) Extracción básica
//const { id, medico, distanciaKm } = traslado;
//console.log(id, medico, distanciaKm); // 3 'Dr. Pérez' 2.5
 
// b) Renombrando variable
const { id, medico, distanciaKm: km } = traslado;
console.log(km); // 2.5
// 'distanciaKm' sigue siendo la clave del objeto,
// 'km' es el nombre de la variable local creada.
// c) Desestructuración de arreglo
const [primero, segundo, tercero] = colores;
console.log(primero);  // 'azul'
console.log(segundo);  // 'blanco'
console.log(tercero);  // 'naranja'

//Desestructuración en parámetros de función arrow
const mostrarTraslado = ({ id, medico, distanciaKm }) =>
  console.log('Traslado #' + id + ' — ' + medico + ' — ' + distanciaKm + ' km');
 
mostrarTraslado(traslado);
// 'Traslado #3 — Dr. Pérez — 2.5 km'
 
// La desestructuración ocurre directamente en la declaración de parámetros.
// Equivale a: const { id, medico, distanciaKm } = traslado; dentro del cuerpo.



