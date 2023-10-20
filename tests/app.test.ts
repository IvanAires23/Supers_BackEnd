import httpStatus from "http-status";
import app from "../src/app";
import supertest from "supertest";

const server = supertest(app)

describe("Test health api", () => {
    it('/health', async () => {
        const result = await server.get('/health')
        expect(result.status).toBe(httpStatus.OK)
        expect(result.text).toBe("ok")
    })
})