"use strict";
const words = ["spray", "limit", "elite", "exuberant"];

// const forMethod = [];
// for (const word of words) {
//     if (word.length >= 6) forMethod.push(word);
// }

const filterMethod = words.filter((word) => word.length >= 6);


const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
    {
        customerName: "Nicolasa",
        total: 160,
        delivered: false,
    },
];

const deliveredOrders = orders.filter((order) => {
    return order.delivered === true && order.total >= 100;
});

const searchByName = (name) => {
    return orders.filter(order => {
        return order.customerName.includes(name);
    });
};

console.log(searchByName("Zule"))