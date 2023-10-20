import app from "../src/app";
import supertest from 'supertest'
import { cleanDB } from "./helpers/cleandb";
import httpStatus from "http-status";
import userFactory from "./factories/user.factory";
import { User } from "../src/protocols";
import { faker } from "@faker-js/faker";

const server = supertest(app)

beforeEach(async () => {
    await cleanDB();
})

describe('POST user sign-up', () => {
    it('should return 400 when data is not sent', async () => {
        const response = await server.post('/auth/sign-up')
            .send({})

        expect(response.status).toBe(httpStatus.BAD_REQUEST)
        expect(response.body).toEqual(expect.arrayContaining([
            "\"name\" is required",
            "\"heroName\" is required",
            "\"email\" is required",
            "\"password\" is required",
            "\"confirmPassword\" is required"
        ]))
    });

    it('should return 409 when registering with repeated email', async () => {
        const user = await userFactory.create()

        const result = await server.post('/auth/sign-up')
            .send({
                heroName: faker.person.firstName(),
                name: faker.person.lastName(),
                email: user.email,
                password: user.password,
                confirmPassword: user.password
            })

        expect(result.status).toBe(httpStatus.CONFLICT)
        expect(result.body).toEqual({
            name: 'emailConflit',
            message: 'Email is already in use'
        })
    });

    it('should return 409 when registering with repeated heroName', async () => {
        const user = await userFactory.create()

        const result = await server.post('/auth/sign-up')
            .send({
                heroName: user.heroName,
                name: faker.person.lastName(),
                email: faker.internet.email(),
                password: user.password,
                confirmPassword: user.password
            })

        expect(result.status).toBe(httpStatus.CONFLICT)
        expect(result.body).toEqual({
            name: 'heroNameConflit',
            message: 'Hero name is already in use'
        })
    });

    it('should return 409 when registering with repeated heroName', async () => {

        const result = await server.post('/auth/sign-up')
            .send({
                heroName: faker.person.firstName(),
                name: faker.person.lastName(),
                email: faker.internet.email(),
                password: faker.lorem.word(8),
                confirmPassword: faker.lorem.word(9)
            })

        expect(result.status).toBe(httpStatus.BAD_REQUEST)
        expect(result.body).toEqual({
            name: 'invalidPassword',
            message: 'Password confirmation is incorrect'
        })
    });

    it('should return 201 when create user', async () => {
        const password = faker.lorem.word(8)

        const result = await server.post('/auth/sign-up')
            .send({
                heroName: faker.person.firstName(),
                name: faker.person.lastName(),
                email: faker.internet.email(),
                password: password,
                confirmPassword: password
            })

        expect(result.status).toBe(httpStatus.CREATED)
    });
})