import Joi from 'joi'
import { User } from '../protocols'

export const userSchema = Joi.object({
    name: Joi.string().min(4).required(),
    heroName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    confirmPassword: Joi.string().required()
})

export const loginSchema = Joi.object<User>({
    email: Joi.string().email().required(),
    password: Joi.string().required()
})