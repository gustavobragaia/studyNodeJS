export function extractQueryParams(query) {
    if (!query || typeof query !== 'string') {
        // Retorna um objeto vazio caso a query seja inválida
        return {};
    }

    return query
        .slice(1) // Remove o "?" inicial
        .split("&") // Divide os parâmetros por "&"
        .reduce((queryParams, param) => {
            const [key, value] = param.split('=');
            queryParams[key] = value; // Adiciona os pares chave/valor ao objeto
            return queryParams;
        }, {});
}
