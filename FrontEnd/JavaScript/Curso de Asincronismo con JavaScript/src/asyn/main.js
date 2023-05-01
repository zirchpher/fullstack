const datas = [
    { id: 1, name: 'John', year: 2015 },
    { id: 2, name: 'Kage', year: 2017 },
    { id: 3, name: 'Mozzila', year: 2020 },
];


const getDatas = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(datas);
        }, 3500);
    });

    return promise;
}

// Using Async Await
async function asyncAwait() {
    const datas = await getDatas();
    console.log(datas);
}

console.log("Before");
asyncAwait();
// getDatas()
//     .then((datas) => console.log(datas))
console.log("After");


// const fnAsyn = function () {
//     return new Promise(function (resolve, reject) {
//         (true)
//             ? setTimeout(() => resolve("Asyn!!"), 2000)
//             : reject(new Error("Error!"));
//     });
// };

// const anotherFn = async () => {
//     const something = await fnAsyn();
//     console.log(something);
//     console.log("Hello!");
// };