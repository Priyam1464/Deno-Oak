// import { serve } from "https://deno.land/std/http/server.ts";
// const server=serve("http://localhost:8000/");
// const body = new TextEncoder().encode("Hello Worldsss\n");

// for await (const req of server) {
//   req.respond({ body });
// }
import { Application} from "https://deno.land/x/oak/mod.ts";
import router from './routes.ts'

const port = 8080;
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`server running at ${port}`)
await app.listen({ port });