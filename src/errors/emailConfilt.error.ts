import { ApplicationError } from "../protocols";

export function emailConflit(): ApplicationError {
    return {
        name: 'emailConflit',
        message: 'Email is already in use'
    }
}