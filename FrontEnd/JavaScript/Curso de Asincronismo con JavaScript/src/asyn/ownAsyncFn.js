const browsers = [
    { id: 1, name: 'Netscape', year: 1994 },
    { id: 2, name: 'Internet Explorer 3.0', year: 1996 },
    { id: 3, name: 'Mozilla M3', year: 1999 },
    { id: 4, name: 'Google Chrome 1', year: 2008 },
];

function getDatas() {
    const response = new Promise((resolve, reject) => {
        if (browsers.length === 0) reject(new Error("Error!"));

        setTimeout(() => resolve(browsers), 1500);
    });

    return response;
}

async function fetchingDatas() {
    try {
        const datas = await getDatas(browsers);
        console.log(datas[0]);
    }
    catch {
        console.log(error);
    }
}

console.log("Before");
fetchingDatas();
console.log("After");