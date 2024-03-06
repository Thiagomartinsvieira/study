const request = require('supertest');
const app = require('../../src/app');

const MAIN_ROUTE = '/accounts';
let user;

beforeAll(async () => {
    const res = await app.services.user.save({
        name: 'User Account',
        mail: `${Date.now()}@mail.com`,
        password: '123456'
    });
    user = { ...res[0] };
});

test('Must enter an account successfully', () => {
    return request(app)
        .post(MAIN_ROUTE)
        .send({ name: 'Acc #1', user_id: user.id })
        .set("authorization", `bearer ${user.token}`)
        .then(result => {
            expect(result.status).toBe(201);
            expect(result.body.name).toBe('Acc #1');
        });
});

test("must store the password encrypted", async () => {
    const res = await request(app)
        .post("/users")
        .send({ name: 'User Account', mail: `${Date.now()}@mail.com`, password: '123456' })
        .set("authorization", `bearer ${user.token}`);

    expect(res.status).toBe(201);

    const { id } = res.body;
    const userDB = await app.services.user.findOne({ id });
    expect(userDB.password).not.toBeUndefined();
    expect(userDB.password).not.toBe("123456");
});

test("You should not enter an account without a name", () => {
    return request(app)
        .post(MAIN_ROUTE)
        .send({ user_id: user.id })
        .set("authorization", `bearer ${user.token}`)
        .then(result => {
            expect(result.status).toBe(400);
            expect(result.body.error).toBe('Name is mandatory');
        });
});

test('Must list all accounts', () => {
    return app.db('accounts')
        .insert({ name: 'Acc list', user_id: user.id })
        .then(() => request(app).get(MAIN_ROUTE).set("authorization", `bearer ${user.token}`))
        .then((res) => {
            expect(res.status).toBe(200);
            expect(res.body.length).toBeGreaterThan(0);
        });
});

test('Most return one account per id', () => {
    return app.db('accounts')
        .insert({ name: 'Acc By id', user_id: user.id }, ['id'])
        .then(acc => request(app).get(`${MAIN_ROUTE}/${acc[0].id}`).set("authorization", `bearer ${user.token}`))
        .then((res) => {
            expect(res.status).toBe(200);
            expect(res.body.name).toBe('Acc By Id');
            expect(res.body.user_id).toBe(user.id);
        });
});

test("Must change an account", () => {
    return app.db('accounts')
        .insert({ name: 'Acc To update', user_id: user.id }, ['id'])
        .then(acc => request(app).put(`${MAIN_ROUTE}/${acc[0].id}`)
            .set("authorization", `bearer ${user.token}`)
            .send({ name: 'Acc Update' }))
        .then(res => {
            expect(res.status).toBe(200);
            expect(res.body.name).toBe('Acc Update');
        });
});

test("Must return an account", () => {
    return app.db('accounts')
        .insert({ name: 'Acc to remove', user_id: user.id }, ['id'])
        .then(acc => request(app).delete(`${MAIN_ROUTE}/${acc[0].id}`).set("authorization", `bearer ${user.token}`))
        .then(res => {
            expect(res.status).toBe(204);
        });
});
