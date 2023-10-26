import Joi from "joi";
import { Post } from "../protocols";

export const postSchema = Joi.object<Post>({
    description: Joi.string().required(),
    imagePost: Joi.string().uri()
})