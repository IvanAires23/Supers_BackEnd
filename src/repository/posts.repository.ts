import prisma from "../configs/database";
import { Post, User } from "../protocols";

async function findAllPosts() {
    return prisma.post.findMany()
}

async function create(body: Post, user: User) {
    return prisma.post.create({
        data: {
            description: body.description,
            heroName: user.heroName,
            userId: user.id,
            imagePost: body.imagePost
        }
    })
}

const postsRepository = {
    findAllPosts,
    create
}

export default postsRepository