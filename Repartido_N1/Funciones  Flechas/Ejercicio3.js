
/* Para poder usar un retorno implícito, se deben cumplir estas 4 condiciones 
simultáneamente:

1. Una sola expresión:
   Debe existir una única operación que devuelva un valor.
   No importa si se distribuye en varias líneas para mejorar la legibilidad; debe seguir siendo una única expresión evaluable.

2. Sin estructuras de control:
   No se pueden utilizar if, for, while, etc.
   Para condiciones, únicamente se permite el operador ternario (? :).

3. Sin llaves {} ni la palabra return:
   Al eliminar las llaves, el retorno se realiza automáticamente.
   Si se utilizan llaves, será necesario escribir return explícitamente.

4. Objetos entre paréntesis ({ ... }):
   Si se retorna un objeto literal, es obligatorio envolverlo entre paréntesis para que JavaScript no confunda las llaves del objeto con las llaves de un bloque de código. */





// Función A
function calcularEdad(anioNacimiento) {
  return 2026 - anioNacimiento;
}
 
// Función B
function describirTraslado(t) {
  const texto = 'Paciente: ' + t.paciente;
  const destino = ' → Destino: ' + t.destino;
  return texto + destino;
}
 
// Función C
function crearRegistro(id, paciente) {
  return { id: id, paciente: paciente, fecha: new Date() };
}
 
// Función D
function esMayorDeEdad(edad) {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}


// ==========================================
// Función A: Cálculo de edad
// ==========================================

// Versión tradicional: Recibe el año y retorna la resta.
function calcularEdad(anioNacimiento) {
  return 2026 - anioNacimiento;
}

// Versión flecha: Retorna directamente un String (texto) usando Template Literals (``).
// interpolacion 
// Al tener un solo argumento (a), no necesita paréntesis.
const calcularEdad2 = a => ` ${2026 - a} años`;

// Invocación: Calcula la edad para los nacidos en 1977 y la muestra en consola.
console.log(calcularEdad2(1977)); // Resultado: " 49 años"


// ==========================================
// Función B: Formatear datos de un traslado
// ==========================================

// Versión tradicional: Recibe un objeto 't', concatena sus propiedades con el operador '+' y las retorna.
function describirTraslado(t) {
  const texto = 'Paciente: ' + t.paciente;
  const destino = ' → Destino: ' + t.destino;
  return texto + destino;
}

// Versión flecha: Hace exactamente lo mismo pero en una sola línea y de forma más limpia.
const describirTraslados2 = (t) => ` Paciente ${t.paciente} → Destino: ${t.destino}`;
 
// Uso de la función como Callback:
// .map() recorre el array 'traslados' y transforma cada objeto en un texto usando 'describirTraslados2'.
// (Nota: Para que esto funcione, el array 'traslados' debe estar definido previamente).
const descripcion = traslados.map(describirTraslados2);

// Muestra el nuevo array con los traslados en formato de texto.
console.log(descripcion);


// ==========================================
// Función C: Creación de objetos (Estructuras de datos)
// ==========================================

// Versión tradicional: Retorna un nuevo objeto asignando los parámetros a sus propiedades de forma explícita.
function crearRegistro(id, paciente) {
  return { id: id, paciente: paciente, fecha: new Date() };
}

// Versión flecha: Utiliza paréntesis `({ ... })` para hacer un retorno implícito del objeto.
// Nota: En JavaScript moderno, si la propiedad y la variable se llaman igual, basta con poner 'id' en vez de 'id: id'.
const crearRegistro2 = (id, paciente) => ({ id: id, paciente: paciente, fecha: new Date() });

// Invocación: Crea el registro para 'Laura' con el ID 101 y lo muestra en consola.
console.log(crearRegistro2(101, 'Laura'));


// ==========================================
// Función D: Validación booleana (Condicionales)
// ==========================================

// Versión tradicional: Utiliza un 'if/else' para evaluar la condición y retornar true o false.
function esMayorDeEdad(edad) {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}

// Versión flecha original: Evalúa la condición dentro de un String. 
// Ojo: Esto devuelve el texto " false " (un string), no el valor booleano 'false'.
const esMayorDeEdad2 = edad => ` ${edad >= 18} ? false: true`;
console.log(esMayorDeEdad2(17)); // Resultado:  " false " (Texto)

/* 💡 TIP DE OPTIMIZACIÓN PARA LA FUNCIÓN D:
  En JavaScript, las comparaciones ya devuelven de forma nativa 'true' o 'false'. 
  La forma ideal y más limpia de escribir la Función D en formato flecha sería:
  
  const esMayorDeEdad2 = edad => edad >= 18;
*/

const esMayorDeEdad3 = edad => edad>=18 ? true : false;
console.log(esMayorDeEdad3(17));

