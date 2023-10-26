import { Post } from "../protocols";
import postsRepository from "../repository/posts.repository";
import usersRepository from "../repository/users.repository";

async function findAllPosts() {

    const posts = await postsRepository.findAllPosts()
    return posts
}

async function create(body: Post, userId: number) {
    const user = await usersRepository.findUserById(userId)
    const post = await postsRepository.create(body, user)
    return post
}

const postsService = {
    findAllPosts,
    create
}

export default postsService