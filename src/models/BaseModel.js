import {default as api} from '../config/api.js';
import {default as env} from '../config/env';

export default class BaseModel{


    constructor(){
        this.id = undefined;
    }

    save(){
        console.log(saved);
    }

    static parseUrl(appendToUrl){

        let root = api.backend.root;

        return root+appendToUrl+"?api_key="+env.API_KEY;

    }

}

