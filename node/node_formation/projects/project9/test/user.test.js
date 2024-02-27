const app = require('../src/app');
const supertest = require('supertest');
const request = supertest(app);

const mainUser = {name: "Thiago Martins", email: 'thiago@email.com', password: '123456'};

beforeAll(async () => {
    await request.post('/user').send(mainUser);
});

afterAll(async () => {
    await request.delete(`/user/${mainUser.email}`);
});

describe("User Register", () => {
    test('Must register a user successfully', () => {
        const time = Date.now();
        const email = `${time}@gmail.com`;
        const user = {name: "Thiago", email, password: "123456"};

        return request.post("/user")
            .send(user)
            .then(res => {
                expect(res.statusCode).toEqual(200);
                expect(res.body.email).toEqual(email);
            });
    });

    test('It must prevent a user from registering with empty data', () => {
        const user = {name: "", email: '', password: ""};

        return request.post("/user")
            .send(user)
            .then(res => {
                expect(res.statusCode).toEqual(400); // 400 = Bad Request
            });
    });

    test("must prevent the user from registering repeated email", () => {
        const time = Date.now();
        const email = `${time}@gmail.com`;
        const user = {name: "Thiago", email, password: "123456"};

        return request.post("/user")
            .send(user)
            .then(res => {
                expect(res.statusCode).toEqual(200);
                expect(res.body.email).toEqual(email);

                return request.post('/user')
                    .send(user)
                    .then(res => {
                        expect(res.statusCode).toEqual(400);
                        expect(res.body.error).toEqual('E-mail already registered');
                    });
            });
    });
});

describe('authentication', () => {
    test("it should return me a token when I log in", () => {
        return request.post('/auth')
            .send({email: mainUser.email, password: mainUser.password})
            .then(res => {
                expect(res.statusCode).toEqual(200);
                expect(res.body.token).toBeDefined();
            });
    });

    test('must prevent unregistered user from logging in', () => {
        return request.post('/auth')
            .send({email: "Anyemail@anjdn.com", password: '23231231'})
            .then(res => {
                expect(res.statusCode).toEqual(403);
                expect(res.body.errors.email).toEqual('email not registered');
            });
    });

    test('should prevent the user from logging in with the wrong password', () => {
        return request.post('/auth')
            .send({email: mainUser.email, password: 'nqwknw'})
            .then(res => {
                expect(res.statusCode).toEqual(403);
                expect(res.body.errors.password).toEqual('incorrect password');
            });
    });
});
 