export function extractQueryParams(query) { 

    const queryWithParams = query 
    .slice(1)
    .split("&")
    .reduce((queryParams, param) => {
        const [key,value] = param.split("="); 

        queryParams[key] = value; 

        return queryParams
    }, {})

    return queryWithParams;
}