import prisma from "../configs/database";

async function create(body) {
    const { name, heroName, email, password, image } = body
    return prisma.user.create({
        data: {
            email,
            heroName,
            name,
            password,
            image
        }
    })
}

function createSession(userId: number, token: string) {
    return prisma.session.create({
        data: {
            token,
            userId
        }
    })
}

async function findUserByEmail(email: string) {
    return prisma.user.findFirst({
        where: {
            email
        }
    })
}

async function findUserById(id: number) {
    return prisma.user.findFirst({ where: { id } })
}

async function findUserByHeroName(heroName: string) {
    return prisma.user.findFirst({
        where: {
            heroName
        }
    })
}

const usersRepository = {
    create,
    findUserByEmail,
    findUserByHeroName,
    findUserById,
    createSession
}

export default usersRepository