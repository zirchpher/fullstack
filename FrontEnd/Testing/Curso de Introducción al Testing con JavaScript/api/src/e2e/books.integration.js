const mockGetAll = jest.fn();

const request = require('supertest');
const createApp = require('../app');
const { generateManyBook } = require('../fakes/books.fake');

jest.mock('../lib/mongo.lib', () =>
    jest.fn().mockImplementation(() => {
        return {
            getAll: mockGetAll,
            create: () => {},
        };
    })
);

describe('tests for books', () => {
    let app = null;
    let server = null;

    beforeAll(() => {
        app = createApp();
        server = app.listen(3001);
    });

    afterAll(async () => {
        await server.close();
    });

    describe('tests for [GET] /api/v1/books', () => {
        test('should be retorn list books', () => {
            // Arrange
            const fakeBooks = generateManyBook(4);
            mockGetAll.mockResolvedValue(fakeBooks);
            // Act
            return request(app)
                .get('/api/v1/books')
                .expect(200)
                .then(({ body }) => {
                    console.log(body);
                    // Assert
                    expect(body.length).toEqual(fakeBooks.length);
                });
        });
    });
});
