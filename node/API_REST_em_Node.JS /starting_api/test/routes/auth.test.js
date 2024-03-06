const request = require("supertest");
const app = require("../../src/app");
const jwt = require("jwt-simple")

test("must create user via signup", () => {
    return request(app).post("/auth/signup")
    .send({name: "Thiago", mail: `${Date.now()}@mail.com`, password: "123456" })
    .then((res) => {
        expect(res.status).toBe(201);
        expect(res.body.name).toBe("Thiago");
        expect(res.body).toHaveProperty("mail");
        expect(res.body).not.toHaveProperty("password");
    });
});

test("must receive token when logging in", () => {
    return request(app)
        .post("/auth/signup")
        .send({ name: "Thiago", mail: `${Date.now()}@mail.com`, password: "123456" })
        .then(() => {
            return request(app)
                .post("/auth/signIn")
                .send({ mail, password: "123456" })
                .then((res) => {
                    expect(res.status).toBe(200);
                    expect(res.body).toHaveProperty("token");
                });
        });
});

test("should not authenticate a user with the wrong password", () => {
    return request(app)
        .post("/auth/signup")
        .send({ name: "Thiago", mail: `${Date.now()}@mail.com`, password: "123456" })
        .then(() => {
            return request(app)
                .post("/auth/signIn")
                .send({ mail, password: "654321" })
                .then((res) => {
                    expect(res.status).toBe(400);
                    expect(res.body.error).toBe("user or password wrong");
                });
        });
});

test("should not authenticate a non-existing user", () => {
    return request(app)
        .post("/auth/signIn")
        .send({ mail: "eu@email.com", password: "654321" })
        .then((res) => {
            expect(res.status).toBe(400);
            expect(res.body.error).toBe("user or password wrong");
        });
});

test("should not access a protected route without a token", () => {
    return request(app)
        .get("/users")
        .then((res) => {
            expect(res.status).toBe(401);
        });
});
