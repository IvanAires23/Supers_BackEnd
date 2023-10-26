
export type ApplicationError = {
    name: string;
    message: string;
};

export type User = {
    id: number;
    image: string;
    heroName: string;
    email: string;
    password: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}

export type Post = {
    description: string;
    imagePost?: string;
}
