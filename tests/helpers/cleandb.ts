import prisma from "../../src/configs/database";

export async function cleanDB() {
    await prisma.session.deleteMany();
    await prisma.user.deleteMany();
    return
}