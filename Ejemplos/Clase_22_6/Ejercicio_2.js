const traslados = [
  { id: 1, paciente: 'Ana Rodríguez',   destino: 'CTI',         estado: 'completado' },
  { id: 2, paciente: 'Luis Fernández',  destino: 'Emergencias', estado: 'pendiente'  },
  { id: 3, paciente: 'Marta González',  destino: 'Imagenología', estado: 'en curso'  },
  { id: 4, paciente: 'Pedro Suárez',    destino: 'CTI',         estado: 'pendiente'  },
  { id: 5, paciente: 'Carmen López',    destino: 'Cirugía',     estado: 'completado' },
];

/*
a. Usá forEach con una función flecha para imprimir en consola el id y el paciente 
de cada traslado con estado 'pendiente'. Ejemplo de salida: Traslado #2 — Luis Fernández
c. ¿Qué valor retorna forEach? ¿Para qué sirve ese valor?

*/

traslados.forEach(traslado=> {
    if( traslado.estado==="pendiente"){
                console.log(`El ID ${traslado.id} nombre :  ${traslado.paciente}`);

    }
})

