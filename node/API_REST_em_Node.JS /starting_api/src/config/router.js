const express = require('express')

module.exports = (app) => {
    app.use("/auth", app.toutes.auth)
    const protectedRouter = express.Router()

    protectedRouter.use("/users", app.toutes.users)
    protectedRouter.use("/accounts", app.toutes.accounts)
    protectedRouter.use("/transactions", app.transactions)

    app.use("/v1", app.config.passport.authenticate(),protectedRouter)

    app.get("/v2/users", (req, res) => res.status(200).send("v2 no ar"))
    app.use("/v2", protectedRouter)

}
