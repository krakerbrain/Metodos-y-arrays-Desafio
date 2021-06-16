document.write("<p>Estadisticas centro medico ñuñoa</p>");

var radiologia = [
  { hora: "11:00", especialista: "IGNACIO SCHULZ", paciente: "FRANCISCA ROJAS", rut: "9878782-1", prevision: "FONASA" },
  { hora: "11:30", especialista: "FEDERICO SUBERCASEAUX", paciente: "PAMELA ESTRADA", rut: "15345241-3", prevision: "ISAPRE" },
  { hora: "15:00", especialista: "FERNANDO WURTHZ", paciente: "ARMANDO LUNA", rut: "16445345-9", prevision: "ISAPRE" },
  { hora: "15:30", especialista: "ANA MARIA GODOY", paciente: "MANUEL GODOY", rut: "17666419-0", prevision: "FONASA" },
  { hora: "16:00", especialista: "PATRICIA SUAZO", paciente: "RAMON ULLOA", rut: "14989389-K", prevision: "FONASA" },
];

var traumatologia = [
  { hora: "08:00", especialista: "MARIA PAZ ALTUZARRA", paciente: "PAULA SANCHEZ", rut: "15554774-5", prevision: "FONASA" },
  { hora: "10:00", especialista: "RAUL ARAYA", paciente: "ANGÉLICA NAVAS", rut: "15444147-9", prevision: "ISAPRE" },
  { hora: "10:30", especialista: "MARIA ARRIAGADA", paciente: "ANA KLAPP", rut: "17879423-9", prevision: "ISAPRE" },
  { hora: "11:00", especialista: "ALEJANDRO BADILLA", paciente: "FELIPE MARDONES", rut: "1547423-6", prevision: "ISAPRE" },
  { hora: "11:30", especialista: "CECILIA BUDNIK", paciente: "DIEGO MARRE", rut: "16554741-K", prevision: "FONASA" },
  { hora: "12:00", especialista: "ARTURO CAVAGNARO", paciente: "CECILIA MENDEZ", rut: "9747535-8", prevision: "ISAPRE" },
  { hora: "12:30", especialista: "ANDRES KANACRI", paciente: "MARCIAL SUAZO", rut: "11254785-5", prevision: "ISAPRE" },
];

var dental = [
  { hora: "8:30", especialista: "ANDREA ZUÑIGA", paciente: "MARCELA RETAMAL", rut: "11123425-6", prevision: "ISAPRE" },
  { hora: "11:00", especialista: "MARIA PIA ZAÑARTU", paciente: "ANGEL MUÑOZ", rut: "9878789-2", prevision: "ISAPRE" },
  { hora: "11:30", especialista: "SCARLETT WITTING", paciente: "MARIO KAST", rut: "7998789-5", prevision: "FONASA" },
  { hora: "13:00", especialista: "FRANCISCO VON TEUBER", paciente: "KARIN FERNANDEZ", rut: "18887662-K", prevision: "FONASA" },
  { hora: "13:30", especialista: "EDUARDO VIÑUELA", paciente: "HUGO SANCHEZ", rut: "17665461-4", prevision: "FONASA" },
  { hora: "14:00", especialista: "RAQUEL VILLASECA", paciente: "ANA SEPULVEDA", rut: "14441281-0", prevision: "ISAPRE" },
];

//Código para el desafio 2 comienza aquí

// 1. Agregar las siguientes horas al arreglo de Traumatología:
// HORA ESPECIALISTA PACIENTE RUT PREVISIÓN
// 09:00 RENÉ POBLETE ANA GELLONA 13123329-7 ISAPRE
// 09:30 MARIA SOLAR RAMIRO ANDRADE 12221451-K FONASA
// 10:00 RAUL LOYOLA CARMEN ISLA 10112348-3 ISAPRE
// 10:30 ANTONIO LARENAS PABLO LOAYZA 13453234-1 ISAPRE
// 12:00 MATIAS ARAVENA SUSANA POBLETE 14345656-6 FONASA

traumatologia.push(
  { hora: "09:00", especialista: "RENÉ POBLETE", paciente: "ANA GELLONA", rut: "13123329-7", prevision: "ISAPRE" },
  { hora: "09:30", especialista: "MARIA SOLAR", paciente: "RAMIRO ANDRADE", rut: "12221451-K", prevision: "FONASA" },
  { hora: "10:00", especialista: "RAUL LOYOLA", paciente: "CARMEN ISLA", rut: "10112348-3", prevision: "ISAPRE" },
  { hora: "10:30", especialista: "ANTONIO LARENAS", paciente: "PABLO LOAYZA", rut: "13453234-1", prevision: "ISAPRE" },
  { hora: "12:00", especialista: "MATIAS ARAVENA", paciente: "SUSANA POBLETE", rut: "14345656-6", prevision: "FONASA" },
)

// Se ordenaron los objetos del arreglo usando el metodo Sort

console.log(traumatologia);
var ordenado = traumatologia.sort(function (a, b) {
if (a.hora > b.hora) {
  return 1;
}
if (a.hora < b.hora) {
  return -1;
}
return 0;
});


// 2. Eliminar el primer y último elemento del arreglo de Radiología

radiologia.shift();
radiologia.pop();

console.log(radiologia);

// 3. Imprimir en la página HTML, mediante document.write y/o la funciones que estime
// conveniente, la lista de consultas médicas de Dental. Sin embargo, debe hacerlo
// separando por un guión cada dato desplegado y cada fila de información debe estar
// separada por un párrafo.
// Ejemplo:
// 8:30 - ANDREA ZUÑIGA - MARCELA RETAMAL - 11123425-6 - ISAPRE
// 11:00 - MARIA PIA ZAÑARTU - ANGEL MUÑOZ - 9878789-2 - ISAPRE...

var datos = dental.reduce(function (acumulador, pacientes) {
  return acumulador + "<p>" + pacientes.hora + " - " + pacientes.especialista + " - " + pacientes.paciente + " - " + pacientes.rut + " - " + pacientes.prevision + "</p>";
}, "");
document.write(`<h4>LISTA CONSULTAS MEDICAS DENTAL</h4>`);
document.write(datos);
document.write(`<br>`)

// 4. Imprimir un listado total de todos los pacientes que se atendieron en el centro
// médico. Para esto, deberá unir todos los nombres de pacientes e imprimir uno por
// cada párrafo.
// Ejemplo:
// FRANCISCA ROJAS
// PAMELA ESTRADA
// ARMANDO LUNA…

var unir = radiologia.concat(traumatologia, dental);

document.write(`<h4>LISTA PACIENTES TOTAL</h4>`);
unir.forEach(function (elementoTemporal) {
  document.write(`<p>${elementoTemporal.paciente}</p>`);
});
document.write(`<br>`)


//     5. Filtrar aquellos pacientes que indican ser de ISAPRE en la lista de consultas médicas
// de Dental.
// Ejemplo:
// MARCELA RETAMAL - ISAPRE
// ANGEL MUÑOZ - ISAPRE
// ANA SEPULVEDA - ISAPRE

var prevision = dental.filter(function(previs){
return previs.prevision == 'ISAPRE'
});
document.write(`<h4>PACIENTES DENTAL PERTENECIENTES A ISAPRE</h4>`);
prevision.forEach(function (elementoTemporal) {
document.write(`<p>${elementoTemporal.paciente} - ${elementoTemporal.prevision}</p>`);
});
document.write(`<br>`)

// 6. Filtrar aquellos pacientes que indican ser de FONASA en la lista de consultas
// médicas de Traumatología.
// Ejemplo:
// PAULA SÁNCHEZ – FONASA

var previsionTraumat = traumatologia.filter(function(previs){
  return previs.prevision == 'FONASA'
});
    document.write(`<h4>PACIENTES TRAUMATOLOGIA PERTENECIENTES A FONASA</h4>`);
previsionTraumat.forEach(function (elementoTemporal) {
  document.write(`<p>${elementoTemporal.paciente} - ${elementoTemporal.prevision}</p>`);
});
    document.write(`<br>`)

//Agregar código para el desafio 2 aquí

document.write(`<p>Cantidad de atenciones para Radiología: ${radiologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Traumatología: ${traumatologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Dental: ${dental.length}</p>`);

document.write(
  `<p>Primera atencion: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length - 1].paciente} - ${
    radiologia[radiologia.length - 1].prevision
  }.</p>`
);
document.write(
  `<p>Primera atencion: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length - 1].paciente} - ${
    traumatologia[traumatologia.length - 1].prevision
  }.</p>`
);
document.write(`<p>Primera atencion: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length - 1].paciente} - ${dental[dental.length - 1].prevision}.</p>`);
