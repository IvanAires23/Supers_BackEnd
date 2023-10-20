import Joi from 'joi'

export const userSchema = Joi.object({
    name: Joi.string().min(4).required(),
    heroName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    confirmPassword: Joi.string().required()
})