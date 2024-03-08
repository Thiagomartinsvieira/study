const express = require("express")
const jwt = require("jwt-simple")
const bcrypt = require("bcrypt-nodejs")
const ValidationError = require("../errs/ValidationError")

const secret  = "mnksmnaklndwi"

module.exports = (app) => {
    const router = express.Router()

    router.post("/signin",  (req, res, next) => {
        app.services.user.findOne({mail: req.body.mail})
        .then((user) => {
            if(!user) throw new ValidationError("user or password wrong")
            if(bcrypt.compareSync(req.body.password, user.password)){
                const payload = {
                    id: user.id,
                    name: user.name,
                    mail: user.mail,
                }
                const token = jwt.encode(payload, secret)
                res.status(200).json({token})
            } else throw new ValidationError("user or password wrong")
        }).catch(error => next(error))
    })

    router.post("/signup", async (req, res, next) => {
        try {
            const result = await app.services.user.save(req.body);
            res.status(201).json(result);
        } catch (error) {
            next(error);
        }
    })

    return router
}