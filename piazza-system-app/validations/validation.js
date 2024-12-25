const joi = require('joi')

const registerValidation = (data) => {
    const schemaValidation = joi.object({
        user_name: joi.string().required().min(3).max(256),
        user_email: joi.string().required().min(6).max(256),
        user_password: joi.string().required().min(6).max(1024)
    })
    return schemaValidation.validate(data)
}

const loginValidation = (data) => {
    const schemaValidation = joi.object({
        user_email: joi.string().required().min(6).max(256),
        user_password: joi.string().required().min(6).max(1024)
    })
    return schemaValidation.validate(data)
}

module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation