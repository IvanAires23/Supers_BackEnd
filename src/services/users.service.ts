import bcrypt from 'bcrypt'
import usersRepository from '../repository/users.respository'
import jwt from 'jsonwebtoken'

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

async function login(email: string, password: string) {
    const user = await usersRepository.findUserByEmail(email)
    if (!user) throw { name: 'unauthorized', message: 'Email or password incorret' }

    const passwordCompare = await bcrypt.compare(password, user.password)
    if (!passwordCompare) throw { name: 'unauthorized', message: 'Email or password incorret' }

    const token = jwt.sign({ userId: user.id, heroName: user.heroName }, process.env.JWT_SECRET)

    await usersRepository.createSession(user.id, token)
    return token

}

const usersService = {
    create,
    login
}

export default usersService