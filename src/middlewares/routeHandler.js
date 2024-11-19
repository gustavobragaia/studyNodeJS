import { extractQueryParams } from "../utils/extract-query-parameters.js"
import { routes } from "../routes.js"
import { Database } from "../database.js"

const database = new Database()

export function routeHandler(request, response){

    const route = routes.find((route) =>{
        return route.method === request.method && route.path.test(request.url)
    })
   
    if (route){
        const routeParams = request.url.match(route.path)

        const {query, ...params} = routeParams.groups
        extractQueryParams(query)

        request.params = params

        request.query = query  ? extractQueryParams(query) : {}

        return route.controller({request, response, database})
    }
    return response.end("Rota nao encontrada!")
}