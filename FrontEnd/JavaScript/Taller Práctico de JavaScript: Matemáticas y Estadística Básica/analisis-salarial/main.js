'use strict';
// Análisis Personal
function searchPerson(name) {
    const person = salarios.find((person) => person.name === name);
    return person;
}

function getMedianPerPerson(name) {
    const jobs = searchPerson(name).trabajos;
    const wages = jobs.map((item) => item.salario);
    const medianWages = Averages.getMedian(wages);
    return medianWages;
}

function projectFutureSalary(name) {
    const trabajos = searchPerson(name).trabajos;
    const growthPercentages = [];

    for (let index = 1; index < trabajos.length; index++) {
        const currentSalary = trabajos[index].salario;
        const previousSalary = trabajos[index - 1].salario;
        const increase = currentSalary - previousSalary;
        const percentIncrease = increase / previousSalary;
        growthPercentages.push(percentIncrease);
    }

    const medianGrowthPercentages = Averages.getMedian(growthPercentages);
    const lastSalary = trabajos[trabajos.length - 1].salario;
    const aumento = lastSalary * medianGrowthPercentages;
    const possibleFutureSalary = lastSalary + aumento;
    return Math.round(possibleFutureSalary);
}

// Análisis Empresarial
const business = {};

// for (let person of salarios) {
//     for (let company of person.trabajos) {
//         if (business[company.empresa] === undefined) {
//             business[company.empresa] = {};
//         }
//         if (business[company.empresa][company.year] === undefined) {
//             business[company.empresa][company.year] = [];
//         }

//         business[company.empresa][company.year].push(company.salario);
//     }
// }

salarios.forEach((person) => {
    person.trabajos.forEach((company) => {
        if (business[company.empresa] === undefined) {
            business[company.empresa] = {};
        }
        if (business[company.empresa][company.year] === undefined) {
            business[company.empresa][company.year] = [];
        }

        business[company.empresa][company.year].push(company.salario);
    })
});

function getMedianPerYear(companyName, year) {
    // Encontrar todos los datos con respecto a la compañía y al año
    const companyWages = business[companyName][year];

    if (companyWages === undefined) {
        return "Company or year not found";
    }
    else {
        // LLamamos al objeto Averages
        const medianPerYear = Averages.getMedian(companyWages);
        return medianPerYear;
    }
}

function projectFutureSalaryOfBusiness(companyName) {
    if (business[companyName] === undefined) {
        return undefined;
    }
    else {
        const company = business[companyName];
        const yearsOfWork = Object.keys(company);
        // const medianYearsOfWork = yearsOfWork.map((year) => {
        //     return getMedianPerYear(companyName, year);
        // });
        const growthPercentages = [];
        const medianYearsOfWork = [];
        for (let year of yearsOfWork) {
            medianYearsOfWork.push(getMedianPerYear(companyName, year));
        }

        for (let index = 1; index < medianYearsOfWork.length; index++) {
            const currentSalary = medianYearsOfWork[index];
            const previousSalary = medianYearsOfWork[index - 1];
            const increase = currentSalary - previousSalary;
            const percentIncrease = increase / previousSalary;
            growthPercentages.push(percentIncrease);
        }

        const medianGrowthPercentages = Averages.getMedian(growthPercentages);
        const lastSalary = medianYearsOfWork[medianYearsOfWork.length - 1];
        const aumento = lastSalary * medianGrowthPercentages;
        const possibleFutureSalary = lastSalary + aumento;
        return Math.round(possibleFutureSalary);
    }
}

// Análisis General
function getGeneralMedian() {
    const names = salarios.map((person) => person.name);
    const medianOfAllPpeople = names.map((name) => getMedianPerPerson(name));
    const generalMedian = Averages.getMedian(medianOfAllPpeople);
    return generalMedian;
}

function getTop10Median() {
    const names = salarios.map((person) => person.name);
    const medianOfAllPpeople = names.map((name) => getMedianPerPerson(name));

    const orderedMedianOfAllPpeople = medianOfAllPpeople.sort((accValue, currValue) => {
        return accValue - currValue;
    });

    const listLenght = orderedMedianOfAllPpeople.length;
    const top10percent = (listLenght * 10) / 100;
    const top10percentPeople = orderedMedianOfAllPpeople.splice(-top10percent);

    const medianTop10 = Averages.getMedian(top10percentPeople);
    return medianTop10;
}

console.log(getTop10Median());