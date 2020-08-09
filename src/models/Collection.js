export default class Collection{


    constructor(data, collectionClass, key){

        this.rawData = data[key];

        this.total = data.meta.total_entries;
        this.currentPage = data.meta.page;
        this.itemsPerPage = data.meta.per_page;

        this.baseModel = collectionClass;

    }

    getParsed(){

        let objects = [];
        let baseClass = this.baseModel;

        this.rawData.forEach( element => {
            
            let temp = new baseClass;
            temp.fill(element);
            objects.push(temp);

        } );


        return {
            data: objects,
            page: this.currentPage,
            totalItems: this.total
        };


    }



}

