"use strict";
// *Some():
// *Retorna "true" or "false" si es que al menos alguno de los elementos cumple una condición

const numbers = [1, 3, 5, 7, 10];

// let isThereEvenNumber = false;

// for (const number of numbers) {
//     if (number % 2 === 0) {
//         isThereEvenNumber = true;
//         break;
//     }
// }

const isThereEvenNumber = numbers.some((number) => number % 2 === 0);


// Hay deliveries enviados?
const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: false,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: false,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: false,
    },
    {
        customerName: "Nicolas",
        total: 2322,
        delivered: false,
    },
];

const thereAreOrdersDelivered = orders.some((order) => order.delivered);


// Hay collisión entre mis fechas de calendario y mi nueva fecha?
const dates = [
    {
        startDate: new Date(2021, 1, 1, 10),
        endDate: new Date(2021, 1, 1, 11),
        title: "Cita de trabajo",
    },
    {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita con mi jefe",
    },
    {
        startDate: new Date(2021, 1, 1, 20),
        endDate: new Date(2021, 1, 1, 21),
        title: "Cena",
    },
];

const newAppointment = {
    startDate: new Date(2021, 1, 1, 8),
    endDate: new Date(2021, 1, 1, 9, 30),
};

const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

const isOverlap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            { start: date.startDate, end: date.endDate },
            { start: newDate.startDate, end: newDate.endDate },
        )
    })
};

console.log('isOverlap', isOverlap(newAppointment));