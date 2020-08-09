import {default as api} from '../../config/api.js';

export default class ApiRequest {
    
  constructor () {

    this.headers = api.backend.headers;

  }

  async sendRequest (
    url,
    method,
    body,
    headers = this.headers) {
    try {    

      let request = {
        method: method,
        headers,
        body: (body) ? JSON.stringify(body) : undefined,
      };

      const response = await fetch(url, request);

      if (response.status === api.backend.response.forbidden) {
        throw { status: response.status };
      } else if ((response.status < 200 || response.status > 299) && response.status != 418) {
        throw { status: response.status };
      } else if (response.status > 201 && response.status < 300) {
        return true;
      }

      const responseBody = await response.json();

      if(response.status == 418)
        throw { status: responseBody.errors };

      return responseBody;

    } catch(error) {
      throw error;
    }

  }

  buildAndFetch(endpoint, method, body) {
    const url = endpoint;
    return this.sendRequest(url, method, body);
  }

}

