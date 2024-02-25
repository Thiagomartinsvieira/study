let app = require('../app')

describe("Basic operations",  () => {

    test("should return the value 10 so add 5 + 5", () => {
        let result = app.sum(5, 5)
        expect(result).toEqual(10)
    })

    test('shoud return the value 10 when multiplying 2 by 5', () => {
        let result = app.mult(2,5)
        expect(result).toEqual(10)
    })

})


