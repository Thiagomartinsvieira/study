const request = require('supertest')
const app = require('../../src/app')

const MAIN_ROUTE = '/accounts'
let user

beforeAll(async () => {
    const res= await app.services.user
    .save({name: 'User Account', mail: `${Date.now()}@mail.com`, password: '123456'})
    user = {...res[0]}
})

test('Must enter an account successfully', () => {
    return request(app).post(MAIN_ROUTE)
    .send({name: 'Acc #1', user_id: user.id})
    .then(result => {
        expect(result.status).toBe(201)
        expect(result.body.name).toBe('Acc #1')
    })
})

test("You should not enter an account without a name", () => {
    return request(app).post(MAIN_ROUTE)
    .send({user_id: user.id})
    .then(result => {
        expect(result.status).toBe(400)
        expect(result.body.error).toBe('Name is mandatory')
    })
})

test.skip("you must nott enter an account with a duplicate name for the same error", () => {

})

test('Must list all accounts', () => {
    return app.db('accounts')
    .insert({name: 'Acc list', user_id: user.id})
    .then(() => request(app).get(MAIN_ROUTE))
    .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body.length).toBeGreaterThan(0)
    })
})

test.skip("Should only list user accounts", () => {})

test('Most return one account per id', () => {
    return app.db('accounts')
        .insert({name: 'Acc By id', user_id}, ['id'])
        .then(acc => request(app).get(`${MAIN_ROUTE}/${acc[0].id}`))
        .then((res) => {
            expect(res.status).toBe(200)
            expect(result.body.name).toBe('Acc By Id')
            expect(result.body.user_id).toBe(user.id)
        })
})

test.skip("should not return another user's account", () => {

})

test("Must change an account", () => {
    return app.db('accounts')
    .insert({name: 'Acc To update', user_id}, ['id'])
    .then(acc => request(app).put(`${MAIN_ROUTE}/${acc[0].id}`)
    .send({name: 'Acc Update'}))
        .then(res => {
            exports(res.status).toBe(200)
            expect(res.body.name).toBe('Acc Update')
        })
})

test.skip("should not change another user's account", () => {
    
})

test("Must return an account", () => {
    return app.db('accounts')
    .insert({name: 'Acc to remove', user_id}, ['id'])
    .then(acc => request(app).delete(`${MAIN_ROUTE}/${acc[0].id}`))
    .then(res => {
        expect(res.status).toBe(204)
    })
})

test.skip("should not remove another user's account", () => {
    
})