const frutas =['manzana', 'banana', 'naranja', 'pera'];
//              0           1           2       3

console.log(frutas);

//***Funciones para  Arrays

//Cantidad de elementos

console.log(frutas.length);

// Primer elemento

console.log(frutas[0]);

//Último elemento 

console.log(frutas[ frutas.length-1]);

//Agregar un elemento 

console.log(frutas.push("naranja"));

//Eliminar el primer elemento

//console.log(frutas.shift(0));
// Método map

//Recorrer una arreglo

/*for(i=0; frutas.length>i; i++){
    console.log(frutas[i]);
}*/

/*for( fruta of frutas){
console.log(fruta);
}*/
//Crea un nuevo arreglo modificando el anterior.
const frutasMayusculas = frutas.map( frutas=>frutas.toUpperCase());


//Realiza una selección que cumpla determinada condición
const frutas_filter= frutas.filter(fru=>fru.length===4);

//Devuelve el primer elemento del arreglo si cumple una condición, de lo contrario undefined (indifinido)

const frutas_find = frutas.find(fruta=> fruta.length===6);

frutas.forEach(fruta=>{
    console.log(fruta);
});


frutasMayusculas.forEach(fruta=>console.log(fruta));

console.log(frutas_filter);
console.log(frutas_find);