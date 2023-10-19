import httpStatus from "http-status"

export default function validateBody(schema) {
    return (req, res, next) => {
        const validation = schema.validate(req.body, { abortEarly: false })

        if (validation.error) {
            const errors = validation.error.details.map(d => d.message)
            return res.status(httpStatus.BAD_REQUEST).send(errors)
        }

        next()
    }
}