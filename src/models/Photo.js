import {default as BaseModel} from './BaseModel.js';
import {default as ApiRequest} from './http/ApiRequest.js';
import {default as Collection} from './Collection';

export default class Photo extends BaseModel{

    constructor(){
        super();    
    }

    fill(data){

        this.id = data.id;
        this.title = data.title;
        this.description = data.description;
        this.url = data.url;
        this.assets = data.assets;

    }

    static async getPopular(id){

        let apiRequest = new ApiRequest();

        //Create the URL

        let append = "photos/popular";

        //Make the request

        let reqResponse;  

        try{
            reqResponse  = await apiRequest.buildAndFetch( Photo.parseUrl(append), 'GET' );
        }catch(error){
            throw error;
        }

        //build object

        let photos = new Collection(reqResponse, Photo, 'photos');
        return photos.getParsed();

    }


}