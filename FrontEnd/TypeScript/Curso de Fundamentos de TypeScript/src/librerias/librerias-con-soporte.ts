import { subDays as restarDias, format } from 'date-fns';

// JavaScript el mes empieza en 0
// Enero = 0, Febrero = 1, Marzo = 2, etc.
const fecha = new Date(2002, 6, 12); // 12 de Julio de 2002

const fechaRestada = restarDias(fecha, 20);

const fechaRestadaConFormato = format(fechaRestada, 'dd/MM/yyyy');

console.log(fechaRestadaConFormato);
