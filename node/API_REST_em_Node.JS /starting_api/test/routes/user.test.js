const request = require("supertest")

const app = require('../../src/app')

const mail = `${Date.now()}@email.com`

test("Must list all users", () => {
    return request(app).get("/users")
    .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body.length).toBeGreaterThan(0)
    })
}, 1000)

test("Must enter user sucessfully", () => {
    return request(app).post("/users")
    .send({name: "Lucas Vieira", mail, password: '123456'})
    .then((res) => {
        expect(res.status).toBe(201)
        expect(res.body.name).toBe("Lucas Vieira")
    })
})

test('Must not enter user without a name', () => {
    return request(app).post('/users')
    .send({mail: 'lucas@email.com', password: '123456'})
    .then((res) => {
       
    })
})

test('must enter user without email', async () => {
   const result = await request(app).post('/users')
    .send({name: 'Lucas Vieira', password: '123456'})
    expect(result.status).toBe(400)
    expect(result.body.error).toBe('Email is mandatory')
})

test('Should not insert user without password', (done) => {
    request(app).post('/users') 
    .send({name: "Lucas Vieira", mail: 'lucas@email.com'})
    .then(res => {
        expect(res.status).toBe(400)
        expect(res.body.error).toBe('Password is mandatory')
        done()
    })
    .catch(error => done.fail(error))
})

test("You must not enter users with an existing email address", () => {
    return request(app).post("/users")
    .send({name: "Lucas Vieira", mail, password: '123456'})
    .then((res) => {
        expect(res.status).toBe(400)
        expect(res.body.error).toBe("There is already a user with this email")
    })
})