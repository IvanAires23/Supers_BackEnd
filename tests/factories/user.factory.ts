import prisma from "../../src/configs/database";
import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt"

async function create(password?: string) {
    const pass = password || faker.lorem.word(8)
    const hash = await bcrypt.hash(pass, 10)
    return prisma.user.create({
        data: {
            email: faker.internet.email(),
            heroName: faker.person.firstName(),
            name: faker.person.lastName(),
            password: hash
        }
    })
}

const userFactory = {
    create
}

export default userFactory