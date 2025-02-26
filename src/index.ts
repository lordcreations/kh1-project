import { Elysia } from "elysia";
import { staticPlugin } from '@elysiajs/static'

const app = new Elysia()
    .use(staticPlugin({ assets: "public", prefix: "/public" }))
    .get("/", () => Bun.file("index.html"))
    .listen(80);


console.log(`🚀 Elysia is running at http://localhost:80`);
