import { ApplicationError } from "../protocols";

export function invalidConfirmPassword(): ApplicationError {
    return {
        name: 'invalidPassword',
        message: 'Password confirmation is incorrect'
    }
}