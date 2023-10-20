export type ApplicationError = {
    name: string;
    message: string;
};

export type AuthenticatedRequest = Request & JWTPayload;

type JWTPayload = {
    userId: number;
};


export type User = {
    id: number,
    heroName: string,
    name: string,
    password: string,
    email: string
}