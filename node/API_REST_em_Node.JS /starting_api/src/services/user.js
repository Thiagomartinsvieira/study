const ValidationError = require('../errs/ValidationError');

module.exports = (app) => {
    const findAll = (filter = {}) => {
        return app.db('users').where(filter).select();
    };

    const save = async (user) => {
        if (!user.name) {
            throw new ValidationError("Name is mandatory");
        }
        if (!user.mail) {
            throw new ValidationError("Email is mandatory");
        }
        if (!user.password) {
            throw new ValidationError("Password is mandatory");
        }

        const userDb = await findAll({ mail: user.mail });
        if (userDb && userDb.length > 0) {
            throw new ValidationError("There is already a user with this email");
        }

        return app.db('users').insert(user, '*');
    };

    return { findAll, save };
};
