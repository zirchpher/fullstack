const { faker } = require('@faker-js/faker');

const generateOneBook = () => {
    return {
        _id: faker.database.mongodbObjectId(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
    };
};

const generateManyBook = (size) => {
    const limit = size ?? 10;
    const fakeBooks = [];
    for (let index = 0; index < limit; index += 1) {
        fakeBooks.push(generateOneBook());
    }
    return [...fakeBooks];
};

module.exports = { generateOneBook, generateManyBook };
