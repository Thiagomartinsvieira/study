const app = require('../src/app');
const supertest = require('supertest');
const request = supertest(app);

test('The application must respond on port 3131', async () => {
    return request.get('/').then(res => expect(res.status).toEqual(200));
});

test("should return red and blue as favorite colors for Thiago", () => {
    return request.get('/color/Thiago').then(res => {
        expect(res.statusCode).toEqual(200);
        expect(res.body.cor).toEqual('red');
        expect(res.body.color).toEqual('blue');
    });
});