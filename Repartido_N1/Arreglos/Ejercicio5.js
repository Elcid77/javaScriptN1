const pacientes = [
    {
        id: 1,
        nombre: "Ana",
        apellido: "Rodríguez",
        ci: "3.456.789-0",
        activo: true,
    },
    {
        id: 2,
        nombre: "Luis",
        apellido: "Fernández",
        ci: "4.123.456-1",
        activo: true,
    },
    {
        id: 3,
        nombre: "Marta",
        apellido: "González",
        ci: "2.987.654-3",
        activo: false,
    },
    {
        id: 4,
        nombre: "Pedro",
        apellido: "Suárez",
        ci: "5.321.098-7",
        activo: true,
    },
    {
        id: 5,
        nombre: "Carmen",
        apellido: "López",
        ci: "1.654.321-2",
        activo: false,
    },
];

const ambulancias = [
    {
        id: 1,
        patente: "SBD 1021",
        modelo: "Renault Master",
        estado: "disponible",
        kmRecorridos: 12400,
    },
    {
        id: 2,
        patente: "KLM 4432",
        modelo: "Mercedes Sprinter",
        estado: "en servicio",
        kmRecorridos: 8750,
    },
    {
        id: 3,
        patente: "TRV 0098",
        modelo: "Fiat Ducato",
        estado: "mantenimiento",
        kmRecorridos: 31200,
    },
    {
        id: 4,
        patente: "AZQ 7714",
        modelo: "Renault Master",
        estado: "disponible",
        kmRecorridos: 4100,
    },
    {
        id: 5,
        patente: "MNB 5521",
        modelo: "Mercedes Sprinter",
        estado: "disponible",
        kmRecorridos: 6300,
    },
];

const traslados = [
    {
        id: 1,
        pacienteId: 1,
        ambulanciaId: 2,
        medico: "Dr. Pérez",
        distanciaKm: 4.2,
        fecha: "2026-06-01",
        estado: "completado",
    },
    {
        id: 2,
        pacienteId: 3,
        ambulanciaId: 1,
        medico: "Dra. Torres",
        distanciaKm: 7.8,
        fecha: "2026-06-02",
        estado: "completado",
    },
    {
        id: 3,
        pacienteId: 2,
        ambulanciaId: 4,
        medico: "Dr. Pérez",
        distanciaKm: 2.5,
        fecha: "2026-06-03",
        estado: "completado",
    },
    {
        id: 4,
        pacienteId: 4,
        ambulanciaId: 2,
        medico: "Dr. Morales",
        distanciaKm: 9.1,
        fecha: "2026-06-04",
        estado: "completado",
    },
    {
        id: 5,
        pacienteId: 1,
        ambulanciaId: 5,
        medico: "Dra. Torres",
        distanciaKm: 3.3,
        fecha: "2026-06-05",
        estado: "completado",
    },
    {
        id: 6,
        pacienteId: 2,
        ambulanciaId: 1,
        medico: "Dr. Pérez",
        distanciaKm: 5.6,
        fecha: "2026-06-06",
        estado: "completado",
    },
];

//Ejercicio 5
const nombresM = pacientes.map((p) => p.nombre.toUpperCase());
console.log(nombresM);
const patenteEstado = ambulancias.map((a) => ({
    patente: a.patente,
    estado: a.estado,
}));
console.log(patenteEstado);
const distacia = traslados.map((td) => td.distanciaKm * 1000);
console.log(distacia);
//Ejercicio 6
const disponiblesFiltrar = ambulancias.filter((a) => a.estado === "disponible");
console.log(disponiblesFiltrar);
const disponiblesFiltrar2 = ambulancias.filter(
    (a) => a.estado === "disponible" && a.kmRecorridos > 5000,
);
console.log(disponiblesFiltrar2);
const pacientesActivos = pacientes.filter((p) => p.activo === true);
console.log(pacientesActivos);

// Ejercicio 7
//A
const ambConPatente = ambulancias.find((p) => p.patente === "TRV 0098");
console.log(ambConPatente);
//B
const ambConPatenteIndex = ambulancias.findIndex(
    (p) => p.patente === "TRV 0098",
);
console.log(ambConPatenteIndex);
//C
const solicitudTraslado = traslados.find((t) => t.medico === "Dr. Pérez");
console.log(solicitudTraslado);

//Ejercicio 8

const totalKilometros = traslados.reduce((acumulador, traslado) => {
    return acumulador + traslado.distanciaKm;
}, 0); // 0 es el valor inicial del acumulador

console.log(`Total de kilómetros del mes: ${totalKilometros} km`);

const totalKilometros2 = traslados.reduce((ac, t) => ac + t.distanciaKm, 0);
console.log(`Total de kilómetros del mes: ${totalKilometros2} km`);

const promedio = totalKilometros / traslados.length;
console.log(Number(promedio.toFixed(2)));

const totalRecorrido = ambulancias.reduce((ac, r) => ac + r.kmRecorridos, 0);
console.log(`Total de kilómetros del mes: ${totalRecorrido} km`);

const gol = [
    { nombre: "Jose", goles: 3 },
    { nombre: "Messi", goles: 2 },
    { nombre: "Julio", goles: 2 },
    { nombre: "Messi", goles: 1 },
    { nombre: "Julio", goles: 0 },
];

//ejemplo previo

const goles = gol.reduce((ac, p) => {
    if (ac[p.nombre]) {
        ac[p.nombre] = ac[p.nombre] + 1;
        console.log(ac);
    } else {
        ac[p.nombre] = 1;
        console.log(ac);
    }
    return ac;
}, {});
//C
const cantaTraslados = traslados.reduce((ac, t) => {
    if (ac[t.medico]) {
        ac[t.medico] = ac[t.medico] + 1;
        console.log(ac);
    } else {
        ac[t.medico] = 1;
    }
    return ac;
}, {});

// EJERCICIO 9

const estadoAmbulacia = ambulancias.some((a) => a.estado === "mantenimiento");
console.log(estadoAmbulacia);
const menos20000 = ambulancias.every((a) => a.kmRecorridos < 200000);
console.log(menos20000);
const trasladoMedico = traslados.some((t) => t.medico === "Dra. Torres");
console.log(trasladoMedico);
// Ejercicio 10
// Ejemplo de uso de sort().
const frutas = ['manzana', 'pera', 'banana', 'kiwi'];

frutas.sort();
console.log(frutas)
console.log(frutas);
// Resultado: [ 'banana', 'kiwi', 'manzana', 'pera' ]

traslados.sort((a, b) => a.id - b.id);
// Ya estaban ordenados por id, resultado igual.
// ATENCIÓN: sort muta el arreglo original traslados.

