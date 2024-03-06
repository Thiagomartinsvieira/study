const passport = require("passport")
const passportJwt = require("passport-jwt")

const secret = "mnksmnaklndwi"

const { Strategy, ExtracJwt } = passportJwt

module.exports = (app) => {
    const params = {
        secretOrKey: secret,
        jwtFromRequest: ExtracJwt.fromAuthHeaderAsBearerToken(),
    }

    const strategy = new Strategy(params, (payload, done) => {
        app.services.user.findOne({id: payload.id})
        .then((user) => {
            if(user) done(null, {...payload})
            else done(null, false)
        }).catch(error => done(error, false))
    })

    passport.use(strategy)

    return {
        authenticate: () => passport.authenticate("jwt", {session: false})
    }
}