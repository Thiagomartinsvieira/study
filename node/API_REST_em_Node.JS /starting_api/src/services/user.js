const ValidationError = require('../errs/ValidationError');
const bcrypt = require('bcrypt-nodejs');

module.exports = (app) => {
    const findAll = async () => {
        return app.db('users').select(['id', 'name', 'email']);
    };

    const findOne = async (filter = {}) => {
        return app.db('users').where(filter).first();
    };

    const getPasswordHash = (password) => {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);
    };

    const save = async (user) => {
        if (!user.name) {
            throw new ValidationError('Name is mandatory');
        }
        if (!user.mail) {
            throw new ValidationError('Email is mandatory');
        }
        if (!user.password) {
            throw new ValidationError('Password is mandatory');
        }

        const userDb = await findOne({ mail: user.mail });
        if (userDb) {
            throw new ValidationError('There is already a user with this email');
        }

        user.password = getPasswordHash(user.password);

        const [newUser] = await app.db('users').insert(user, ['id', 'name', 'email']);
        return newUser;
    };

    return { findAll, save, findOne };
};