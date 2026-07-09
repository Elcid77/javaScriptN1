
/*const frutas= [ 'manzana','pera', 'naranja', 'uva', 55];
//                  0       1       2           3   4



//MOSTRAR UN ARREGLO

console.log(frutas);
/*
for (const fruta of frutas){
    console.log(fruta);
}


console.log(frutas[0]);;

console.log( frutas [frutas.length - 1]);

//Agregar un elemento
frutas.push("Bananas")
//Eliminar el primer elemento

// Foreach y  Callback
frutas.forEach( fruta=> console.log(fruta));
*/
//OBJETOS

const usuario= {
    nombre : "Manuel",
    edad: 35,
    esDocente : true,
    materias: ["Programación Web", "Taller" ],
    direccion: {
            calle: "Carabelas",
            numero: 3098,
    }
};
console.log(usuario.nombre)
console.log(usuario.direccion);
console.log(Object.keys(usuario));
console.log(Object.values(usuario));
console.log(Object.entries(usuario));

for(const[clave, valor] of Object.entries(usuario)){

    if( typeof valor=='Object' && valor!== null){
        console.log(`${valor}:`)
        
        for(const[subClave, subValor] of Object.entries(valor)){
                console.log(`${subClave} : ${subValor}`);
        }
        }else{
                console.log(`${clave}: ${valor}`);
            
        }
   
}


//console.log(JSON.stringify(usuario, null, 2));


//EJERCICICO 2


const traslados = [
  { id: 1, paciente: 'Ana Rodríguez',   destino: 'CTI',         estado: 'completado' },
  { id: 2, paciente: 'Luis Fernández',  destino: 'Emergencias', estado: 'pendiente'  },
  { id: 3, paciente: 'Marta González',  destino: 'Imagenología', estado: 'en curso'  },
  { id: 4, paciente: 'Pedro Suárez',    destino: 'CTI',         estado: 'pendiente'  },
  { id: 5, paciente: 'Carmen López',    destino: 'Cirugía',     estado: 'completado' },
];


traslados.forEach(traslado=> {
    if( traslado.estado==="pendiente"){
        console.log(traslado);
    }
    
})

//Función anónima
traslados.forEach(function(t){
    if( t.estado==="pendiente"){
        console.log(t);
    }
})

