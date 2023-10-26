import { NextFunction, Request, Response } from "express"
import httpStatus from "http-status"
import { Schema } from "joi"

export default function validateBody(schema: Schema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const validation = schema.validate(req.body, { abortEarly: false })

        if (validation.error) {
            const errors = validation.error.details.map(d => d.message)
            return res.status(httpStatus.BAD_REQUEST).send(errors)
        }

        next()
    }
}