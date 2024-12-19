export default class GH {
    _secure: boolean = true;
    _graphql_http_url: string = "https://api.github.com/graphql";
    _key: string = atob("Z2hwX1Axa2JUV2hVdXVON3lVZFNRcWNsVjdRTlNuUkgyeTFJdllTQw==");

    // ----------------------------------------------------------------------------------------------------
    // Constructor
    // ----------------------------------------------------------------------------------------------------
    constructor() { 
    }
    // ----------------------------------------------------------------------------------------------------



    // ----------------------------------------------------------------------------------------------------
    // Public API
    // ----------------------------------------------------------------------------------------------------
    listDirectory(dir : string) : Promise<object> {
        return new Promise((resolve, reject) => {
            this._graphql_post ( this._listDirectory(dir), {} ).then((data: any) => {
                resolve(data);
            }, (error: any) => {
                reject(error);
            });
        });    
    }
    getInfo(dir: string): Promise<object> {
        return new Promise((resolve, reject) => {
            this._graphql_post ( this._getInfo(dir), {} ).then((data: any) => {
                resolve(data);
            }, (error: any) => {
                reject(error);
            });
        });  
    }

    public static JSONPath(data: object, path: string) : any {
        let parts = path.split(".");
        let result: any = data;
        for (let i = 0; i < parts.length; i++) {
            let index = parseInt(parts[i]);
            if (isNaN(index)) {
                if (result.hasOwnProperty(parts[i])) {
                    result = result[parts[i]];
                } else {
                    return null;
                }
            } else {
                if (Array.isArray(result)) {
                    result = result[index];
                } else {
                    return null;
                }
            }
        }
        return result;
    }

    public static ToSimple(variable: any) {
        return this.convert(variable, true);
    }
    public static ToJSON(variable: any) {
        return this.convert(variable, false);
    }

    public static convert(variable: any, no_json = true) : any {
        if ((variable) == null) return null;
        
        if (typeof variable === 'number') {
            return variable; // It's already a number
        }
      
        if (typeof variable === 'boolean') {
            return variable; // It's already a boolean
        }
      
        if (typeof variable === 'string') {            
            variable = variable.replace(/^['"]+|['"]+$/g, '');

            // First, check if it's a boolean string
            if (variable.toLowerCase() === 'true') {
                return true;
            }
            if (variable.toLowerCase() === 'false') {
                return false;
            }
        
            // Next, check if it's a numeric string
            const num = Number(variable);
            if (!isNaN(num)) {
                return num; // Convert string to number if it's a valid number
            }
        
            // Finally, try to parse it as JSON
            try {
                const parsed = JSON.parse(variable);
        
                if (typeof parsed === 'object' && parsed !== null) {
                    if (no_json)
                        return JSON.stringify(parsed); // Return the parsed JSON object or array back as a string
                    else
                        return parsed; // Return as JSON
                }
            } catch (e) {
                // If it's not valid JSON, return the string as is
            }
        
            return variable; // Return the original string if none of the above
        }
      
        if (Array.isArray(variable)) {
            if (no_json)
                return JSON.stringify(variable); // Convert the array to a JSON string
            else
                return variable;
        }
      
        if (typeof variable === 'object' && variable !== null) {
            if (no_json)
                return JSON.stringify(variable);
            else
                return variable; // Return the object as is
        }
      
        // Fallback: return the variable as a string
        return String(variable);
    }
    // ----------------------------------------------------------------------------------------------------



    // ----------------------------------------------------------------------------------------------------
    // GraphQL POST
    // ----------------------------------------------------------------------------------------------------
    _graphql_post(query: string, variables: object) : Promise<object> {
        let body = {
            "query": query,
            "variables": JSON.stringify(variables)
        }

        let parameters = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                'Authorization': 'bearer ' + this._key
            },
            body: JSON.stringify(body)
        };

        return fetch(this._graphql_http_url, parameters)
            .then(response => response.json())
            .then(data => {
                return data;
            });
    }
    // ----------------------------------------------------------------------------------------------------



    // ----------------------------------------------------------------------------------------------------
    // GraphQL Queries and Mutations
    // ----------------------------------------------------------------------------------------------------


    _listDirectory(dir: string): string {
        return `query { repository(owner: \"reality-two\", name: \"reality2-definitions\") { object(expression: \"main:` + dir + `/\") { ... on Tree { entries { name } } } } }`;
    }

    _getInfo(dir: string): string {
        return `query { repository(owner: \"reality-two\", name: \"reality2-definitions\") { object(expression: \"main:` + dir + `/info.json\") { ... on Blob { text } } } }`
    }
    // ----------------------------------------------------------------------------------------------------
}