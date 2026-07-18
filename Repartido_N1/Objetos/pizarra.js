const trabajador={
    nombre: "Gustavo",
    edad: 25,
    nacionalidad: 'argentino',
    profesion:"Maestro",
    activo: true,
    historial: {
    empresa: ['Media.sa','Romi.sa','Can.srl']

    }

}
//console.log(trabajador);

//Mostrar un valor
console.log(trabajador.nombre);
console.log(trabajador['edad']);
// Recorre por clave, valor y por ambas creando un array.

console.log(Object.keys(trabajador));
console.log(Object.values(trabajador));
console.log(Object.entries(trabajador));


//Modificar 
trabajador.profesion='Médico'
trabajador['edad']= 56;
//Agregar
trabajador.apellido='Perez';
trabajador.historial.empresa.push('NISA.SA');
trabajador['prueba']=5999999;

//Borrar
delete trabajador.nacionalidad;
//Usar

const trabModificado={...trabajador, profesion:'Administrativo', activo:false};

console.log(trabajador);


/* Object.entries(trabajador).forEach(([clave,valor])=>{
 console.log(`La clave es ${clave} y el valor ${valor}`);
})


Object.entries(trabModificado).forEach(([clave,valor])=>{
 console.log(`La clave es ${clave} y el valor ${valor}`);
}) */

/* const persona={
    nombre: 'Pablo',
    edad: 42,
    trabajo: true,
    pais: 'Jamaica'

}

const{nombre: inicial,edad,trabajo}=persona;
console.log(edad);
console.log(inicial); */