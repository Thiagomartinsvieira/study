module.exports = (app) => {
    const findAll = (filter = {}) => {
        return app.db('users').where(filter).select()
    }

    const save = async (user) => {
        if(!user.name) return {error: "Name is mandatory"}
        if(!user.mail) return {error: "Email is mandatory"}
        if(!user.password) return {error: "Password is mandatory"}


        const userDb = await findAll({mail: user.mail})
        if(userDb && userDb.length > 0) return {error: "There is already a user with this email"}

       return app.db('users').insert(user, '*')
    } 

    return { findAll, save }
}