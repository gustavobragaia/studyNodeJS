export async function jsonBodyHandler(request, response){
    // add each chunk
    const buffers = []
       
    // collect chunks data of request
    for await ( const chunk of request){
        buffers.push(chunk)
    }

    try{
        // concate the chunks and convert to string. convert string to JSON
        request.body = JSON.parse(Buffer.concat(buffers).toString())
    } catch(e){
        request.body = null
    }

    // define response header as JSON
    response.setHeader("Content-Type", "application/json")
}