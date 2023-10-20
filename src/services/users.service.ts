import bcrypt from 'bcrypt'
import usersRepository from '../repository/users.respository'
import jwt from 'jsonwebtoken'
import { User } from '../protocols'
import { invalidConfirmPassword } from '../errors/invalidConfirmPassword.errors'
import { emailConflit } from '../errors/emailConfilt.error'

async function create(body: Omit<User, "id">, confirmPassword: string) {
    const { password, email, heroName, } = body

    if (!body) throw { name: 'dataInvalid', message: 'data invalid' }

    const emailUser = await usersRepository.findUserByEmail(email)
    if (emailUser) throw emailConflit();

    const heroNameUser = await usersRepository.findUserByHeroName(heroName)
    if (heroNameUser) throw { name: 'heroNameConflit', message: 'Hero name is already in use' }

    if (confirmPassword !== password) throw invalidConfirmPassword()

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