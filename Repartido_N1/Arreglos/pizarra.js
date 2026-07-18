const pacientes = [
  { id: 1, nombre: 'Ana',    apellido: 'Rodríguez', ci: '3.456.789-0', activo: true  },
  { id: 2, nombre: 'Luis',   apellido: 'Fernández', ci: '4.123.456-1', activo: true  },
  { id: 3, nombre: 'Marta',  apellido: 'González',  ci: '2.987.654-3', activo: false },
  { id: 4, nombre: 'Pedro',  apellido: 'Suárez',    ci: '5.321.098-7', activo: true  },
  { id: 5, nombre: 'Carmen', apellido: 'López',     ci: '1.654.321-2', activo: false },
];
 
const ambulancias = [
  { id: 1, patente: 'SBD 1021', modelo: 'Renault Master',    estado: 'disponible',   kmRecorridos: 12400 },
  { id: 2, patente: 'KLM 4432', modelo: 'Mercedes Sprinter', estado: 'en servicio',  kmRecorridos: 8750  },
  { id: 3, patente: 'TRV 0098', modelo: 'Fiat Ducato',       estado: 'mantenimiento',kmRecorridos: 31200 },
  { id: 4, patente: 'AZQ 7714', modelo: 'Renault Master',    estado: 'disponible',   kmRecorridos: 4100  },
  { id: 5, patente: 'MNB 5521', modelo: 'Mercedes Sprinter', estado: 'disponible',   kmRecorridos: 6300  },
];
 
const traslados = [
  { id: 1, pacienteId: 1, ambulanciaId: 2, medico: 'Dr. Pérez',   distanciaKm: 4.2, fecha: '2026-06-01', estado: 'completado' },
  { id: 2, pacienteId: 3, ambulanciaId: 1, medico: 'Dra. Torres', distanciaKm: 7.8, fecha: '2026-06-02', estado: 'completado' },
  { id: 3, pacienteId: 2, ambulanciaId: 4, medico: 'Dr. Pérez',   distanciaKm: 2.5, fecha: '2026-06-03', estado: 'completado' },
  { id: 4, pacienteId: 4, ambulanciaId: 2, medico: 'Dr. Morales', distanciaKm: 9.1, fecha: '2026-06-04', estado: 'completado' },
  { id: 5, pacienteId: 1, ambulanciaId: 5, medico: 'Dra. Torres', distanciaKm: 3.3, fecha: '2026-06-05', estado: 'completado' },
  { id: 6, pacienteId: 2, ambulanciaId: 1, medico: 'Dr. Pérez',   distanciaKm: 5.6, fecha: '2026-06-06', estado: 'completado' },
];
/* a. Filtrá el arreglo ambulancias para obtener solo las que tienen estado 'disponible'.
b. Filtrá las ambulancias disponibles que además tienen 
más de 5000 km recorridos. (Podés encadenar dos filter o usar && en uno solo.)
c. Filtrá el arreglo pacientes para obtener solo los pacientes activos.
d. ¿Qué devuelve filter si ningún elemento cumple la condición? Verificalo con un ejemplo. */

const disponible= ambulancias.filter(a=> a.estado==='disponible');
console.log(disponible);
const mantenimiento= ambulancias.filter(a=>a.kmRecorridos>=5000);
console.log(mantenimiento);
const activos=pacientes.filter(p=>p.activo===true);
console.log(activos);

/* a. Usá find para obtener el objeto completo de la ambulancia con patente 'TRV 0098'.
b. Usá findIndex para obtener la posición en el arreglo de esa misma ambulancia.
c. Buscá con find el primer traslado asignado al médico 'Dr. Pérez'. ¿Qué traslado devuelve? ¿Por qué solo devuelve uno si hay varios?
d. Buscá con find una ambulancia con patente inexistente ('XYZ 0000'). ¿Qué retorna? ¿Y findIndex en ese caso?
 */
const patenteBuscar= ambulancias.find(a=>a.patente==="TRV 0098");
console.log(patenteBuscar);
const patenteInd= ambulancias.findIndex(a=>a.patente==="TRV 0098");
console.log(patenteInd);
const medicoBuscar= traslados.find(m=>m.medico==='Dr. Pérez');
console.log(medicoBuscar);
const patenteBuscar2= ambulancias.find(a=>a.patente==="TRV 0000");
console.log(patenteBuscar2);

/* a. Usá reduce sobre traslados para calcular la suma total de kilómetros (distanciaKm) de todos los traslados del mes.
b. Usá el resultado del inciso a para calcular el promedio de km por traslado.
c. Usá reduce sobre ambulancias para calcular el total de km recorridos por toda la flota (kmRecorridos).
d. Desafío: usá reduce para contar cuántos traslados realizó cada médico. El resultado debe ser un objeto: { 'Dr. Pérez': 3, 'Dra. Torres': 2, ... }

acumulador: Es la variable que "guarda" el resultado acumulado de 
las iteraciones anteriores. En la primera iteración, toma el valor de valorInicial.
valorActual: El elemento del array que se está
 procesando en el turno actual.
valorInicial (opcional pero muy recomendado): El valor con el que arranca el acumulador. Si no lo pones, reduce tomará el primer elemento del array como valor inicial y empezará a iterar desde el segundo.
 */

const sumaKilometros= traslados.reduce((ac,va)=> ac+va.distanciaKm,0);
console.log(sumaKilometros);

const promedio = sumaKilometros/ traslados.length;
console.log(promedio.toFixed(2));

const porMedico= traslados.reduce((ac,va)=>{

    if(ac[va.medico]){
        ac[va.medico]=ac[va.medico]+1;
    }else{
        ac[va.medico]=1;
    }
    return ac;
}
,{}
) 

console.log(porMedico);