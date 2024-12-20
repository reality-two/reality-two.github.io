export default class GH {
    _rest_api_url: string = "https://api.github.com/repos";

    // ----------------------------------------------------------------------------------------------------
    // Constructor
    // ----------------------------------------------------------------------------------------------------
    constructor() {}
    // ----------------------------------------------------------------------------------------------------



    // ----------------------------------------------------------------------------------------------------
    // Public API
    // ----------------------------------------------------------------------------------------------------
    listDirectory(dir : string) : Promise<object> {
        return new Promise((resolve, reject) => {
            this._rest_get ( this._listDirectory(dir) ).then((data: any) => {
                resolve(data);
            }, (error: any) => {
                reject(error);
            });
        });    
    }
    getInfo(dir: string): Promise<object> {
        return new Promise((resolve, reject) => {
            this._rest_get ( this._getInfo(dir) ).then((data: any) => {
                let content:any = JSON.parse(atob(data.content));
                resolve(content);
            }, (error: any) => {
                reject(error);
            });
        });  
    }
    getFile(dir: string, filename: string): Promise<object> {
        return new Promise((resolve, reject) => {
            this._rest_get ( this._getFile(dir, filename) ).then((data: any) => {
                let content:any = atob(data.content);
                resolve(content);
            }, (error: any) => {
                reject(error);
            });
        });  
    }
    // ----------------------------------------------------------------------------------------------------



    // ----------------------------------------------------------------------------------------------------
    // GET
    // ----------------------------------------------------------------------------------------------------
    _rest_get(query: string) : Promise<object> {
        let url = this._rest_api_url + query;

        let parameters = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
                // 'Authorization': 'bearer ' + this._key
            }
        };

        return fetch(url, parameters)
            .then(response => response.json())
            .then(data => {
                return data;
            });
    }
    // ----------------------------------------------------------------------------------------------------



    // ----------------------------------------------------------------------------------------------------
    // REST Queries
    // ----------------------------------------------------------------------------------------------------
    _listDirectory(dir: string): string {
        return `/reality-two/reality2-definitions/contents/` + dir;
    }

    _getInfo(dir: string): string {
        return `/reality-two/reality2-definitions/contents/` + dir + `/info.json`;
    }

    _getFile(dir: string, filename: string): string {
        return `/reality-two/reality2-definitions/contents/` + dir + `/` + filename;
    }
    // ----------------------------------------------------------------------------------------------------
}