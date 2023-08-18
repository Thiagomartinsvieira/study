const { body } = require('express-validator')

const userCreateValidation = () => {
    return [
        body('name')
        .isString()
        .withMessage('o nome é obrigatorio')
        .isLength({ min: 3 })
        .withMessage('O nome precisa ter no minimo 3 caracteres'),
    body('email')
        .isString()
        .withMessage('O email é obrigatorio')
        .isEmail()
        .withMessage('Insira um email valido'),
    body('password')
        .isString()
        .withMessage('A senha é obrigatoria')
        .isLength({ min: 5 })
        .withMessage('A senha precisa ter no minimo 5 caracteres'),
    body('confirmpassword')
        .isString()
        .withMessage('A confirmação de senha é obrigatoria.')
        .custom((value, {req}) => {
            if(value !== req.body.password) {
                throw new Error('AS senhas não são iguais')
            } 
            return true;
        })
    ]
}

const loginValidation = () => {
    return [
        body('email')
            .isString()
            .withMessage('O email é obrigatorio')
            .isEmail()
            .withMessage('Insira um email valido'),
        body('password')
            .isString()
            .withMessage('A senha é obrigatoria')
    ]
}

const userUpdateValidation = () => {

    return [
        body('name')
            .optional()
            .isLength({min: 3})
            .withMessage('Nome precisa de pelo menos 3 caracters.'),
        body('passwod')
            .optional()
            .isLength({min: 5})
            .withMessage('A senha precisa ter no minimo 5 carcters'),
    ]
}

module.exports = {
    userCreateValidation,
    loginValidation,
    userUpdateValidation,
}