import prisma from "../configs/database";

async function create(body) {
    const { name, heroName, email, password } = body
    return prisma.user.create({
        data: {
            email,
            heroName,
            name,
            password
        }
    })
}

function createSession() {

}

async function findUserByEmail(email) {
    return prisma.user.findFirst({
        where: {
            email
        }
    })
}

async function findUserByHeroName(heroName) {
    return prisma.user.findFirst({
        where: {
            heroName
        }
    })
}

const usersRepository = {
    create,
    findUserByEmail,
    findUserByHeroName
}

export default usersRepository