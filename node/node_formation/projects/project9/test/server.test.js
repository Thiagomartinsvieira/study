const app = require('../src/app')
const supertest = require('supertest')
const request = supertest(app)

test("The application must respond to the port", () => {

    return request.get('/').then(res => {
        const status = res.statusCode
        expect(status).toEqual(200)
    }).catch(error => {
        fail(error)
    })

})