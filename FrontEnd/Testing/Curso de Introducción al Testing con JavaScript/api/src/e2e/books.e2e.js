const { MongoClient } = require('mongodb');
const request = require('supertest');
const createApp = require('../app');
const { config } = require('../config');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('tests for books', () => {
    let app = null;
    let server = null;
    let database = null;

    beforeAll(async () => {
        app = createApp();
        server = app.listen(3001);
        const client = new MongoClient(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        await client.connect();
        database = client.db(DB_NAME);
    });

    afterAll(async () => {
        await server.close();
        await database.collection('books').drop();
    });

    describe('tests for [GET] /api/v1/books', () => {
        test('should be retorn list books', async () => {
            // Arrange
            const seedData = database.collection('books').insertMany([
                {
                    name: 'book1',
                    year: 2012,
                    author: 'author 1',
                },
                {
                    name: 'book2',
                    year: 2002,
                    author: 'author 2',
                },
            ]);
            // Act
            return request(app)
                .get('/api/v1/books')
                .expect(200)
                .then(({ body }) => {
                    console.log(body);
                    // Assert
                    expect(body.length).toEqual(seedData.insertedCount);
                });
        });
    });
});
