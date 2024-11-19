import http, { METHODS } from "http"
import { jsonBodyHandler } from "./middlewares/jsonHandler.js"
import { routeHandler } from "./middlewares/routeHandler.js"

const server = http.createServer( async (request, response) => {
    const {method, url} = request
    await jsonBodyHandler(request, response)
    
    routeHandler(request, response)
})

server.listen(3333)