// * Flatmap() => hace 2 procesos en una misma línea (map y flat)

const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
    { userId: 2, username: "Mike", attributes: ["Lovely"] },
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"] },
];

// Método flat-map por separado
// const usersAttributes = users.map(user => user.attributes);
// const usersAttributesFlatted = usersAttributes.flat(Infinity);
// console.log(usersAttributesFlatted);

// Método flatmap
const usersAttributesFlatted = users.flatMap(user => user.attributes);
// console.log(usersAttributesFlatted);


// * Desafío: Obtener todos los startDate de una lista de citas

const calendars = {
    primaryCalendar: [
        {
            startDate: new Date(2021, 1, 1, 15),
            endDate: new Date(2021, 1, 1, 15, 30),
            title: "Cita 1",
        },
        {
            startDate: new Date(2021, 1, 1, 17),
            endDate: new Date(2021, 1, 1, 18),
            title: "Cita 2",
        },
    ],
    secondaryCalendar: [
        {
            startDate: new Date(2021, 1, 1, 12),
            endDate: new Date(2021, 1, 1, 12, 30),
            title: "Cita 2",
        },
        {
            startDate: new Date(2021, 1, 1, 9),
            endDate: new Date(2021, 1, 1, 10),
            title: "Cita 4",
        },
    ],
};

// Method 1
const calendarsToArray = Object.values(calendars).flat(Infinity);
const startDates2 = calendarsToArray.map(date => date.startDate);
// console.log(startDates2);


// Method 2
const calendarsValues = Object.values(calendars);
const startDates = calendarsValues.flatMap(dates => {
    return dates.map(date => {
        return date["startDate"];
    });
});
// console.log(startDates);



// Reto => retornar la cantidad de palabras
const lines = [
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated",
];

const allTheWordsInArray = lines.join(" ").split(" ");
const lengthWords = allTheWordsInArray.length;
// console.log(lengthWords);