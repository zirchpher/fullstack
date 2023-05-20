const request = require('supertest');

const createApp = require('../app');

describe('tests for hello endpoint', () => {
    let app = null;
    let server = null;

    beforeAll(() => {
        app = createApp();
        server = app.listen(3001);
    });

    afterAll(async () => {
        await server.close();
    });

    describe('tests for [GET] /', () => {
        test('should be retorn Hello World!', () =>
            request(app)
                .get('/')
                .expect(200)
                .then((response) => {
                    expect(response.text).toEqual('Hello World!');
                }));
    });
});
