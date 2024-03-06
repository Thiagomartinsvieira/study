const request = require('supertest');
const jwt = require("jwt-simple")
const app = require('../../src/app');
const mail = `${Date.now()}@email.com`

let user

beforeAll(async () => {
    const res= await app.services.user
    .save({name: 'User Account', mail: `${Date.now()}@mail.com`, password: '123456'})
    user = {...res[0]}
    user.token = jwt.encode(user, "mnksmnaklndwi")
})

test('Must list all users', () => {
    return request(app)
        .get('/users')
        .set("authorization", `bearer ${user.token}`)
        
        .then((res) => {
            expect(res.status).toBe(200);
            expect(res.body.length).toBeGreaterThan(0);
        });
}, 1000);

test('Must enter user successfully', () => {
    return request(app)
        .post('/users')
        .send({ name: 'Lucas Vieira', mail: `${Date.now()}@mail.com`, password: '123456' })
        .set("authorization", `bearer ${user.token}`)

        .then((res) => {
            expect(res.status).toBe(201);
            expect(res.body.name).toBe('Lucas Vieira');
            expect(res.body).not.toHaveProperty('password');
        });
});

test('Must not enter users with an existing email address', () => {
    return request(app)
        .post('/users')
        .send({ name: 'Lucas Vieira', mail: 'existing@mail.com', password: '123456' })
        .set("authorization", `bearer ${user.token}`)

        .then((res) => {
            expect(res.status).toBe(400);
            expect(res.body.error).toBe('There is already a user with this email');
        });
});