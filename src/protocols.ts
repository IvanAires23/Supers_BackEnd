export type ApplicationError = {
    name: string;
    message: string;
};

export type AuthenticatedRequest = Request & JWTPayload;

type JWTPayload = {
    userId: number;
};
