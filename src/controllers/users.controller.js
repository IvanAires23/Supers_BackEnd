import httpStatus from "http-status";
import usersService from "../services/users.service.js";

async function create(req, res) {
    try {
        const user = await usersService.create(req.body)
        return res.status(httpStatus.CREATED).send("User Created")
    } catch (err) {
        if (err.name === 'emailConflit' || err.name === 'heroNameConflit') {
            return res.status(httpStatus.CONFLICT).send(err.message)
        }
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
    }
}

const usersController = {
    create
}

export default usersController