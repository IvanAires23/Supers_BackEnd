import prisma from "../../src/configs/database";
import { faker } from "@faker-js/faker"

async function create() {
    return prisma.user.create({
        data: {
            email: faker.internet.email(),
            heroName: faker.person.firstName(),
            name: faker.person.lastName(),
            password: faker.lorem.word(8)
        }
    })
}

const userFactory = {
    create
}

export default userFactory