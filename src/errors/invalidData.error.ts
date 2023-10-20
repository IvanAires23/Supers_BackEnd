import { ApplicationError } from "../protocols";

export function invalidData(): ApplicationError {
    return {
        name: 'unauthorized',
        message: 'Email or password incorret'
    }
}