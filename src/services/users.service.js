import bcrypt from 'bcrypt'
import usersRepository from '../repository/users.respository.js'

async function create(body) {
    const { password } = body

    if (!body) throw { name: 'dataInvalid', message: 'data invalid' }

    const email = await usersRepository.findUserByEmail(body.email)
    if (email) throw { name: 'emailConflit', message: 'Email is already in use' }

    const heroName = await usersRepository.findUserByHeroName(body.heroName)
    if (heroName) throw { name: 'heroNameConflit', message: 'Hero name is already in use' }

    const hashPassword = await bcrypt.hash(password, 10)
    const dataUser = { ...body, password: hashPassword }

    const user = await usersRepository.create(dataUser)
    return user
}

const usersService = {
    create
}

export default usersService