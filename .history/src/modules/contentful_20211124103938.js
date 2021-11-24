import { createClient } from 'contentful'

class Contentful {

    constructor() {
        this.client= createClient({
        space: 'ysi1w9hs8nqb',
        accessToken: 'VMBxczFLhJpJq09naVF2q44ubmFJ91Gm3098TrfYfuk'
    })
    }

    async getHsluFacts() {
        let result = await this.client
            .getEntries({
                content_type: "hsluFacts"
            });
        console.log(result.items);
        //result Array.sort()
        return result.items;
    }  
    
    async getStart() {
        let result = await this.client
            .getEntries({
                content_type: "start"
            });
        console.log(result.items);
        return result.items;
    } 
    
    async getDepartements() {
        let result = await this.client
            .getEntries({
                content_type: "hsluFacts"
            });
        console.log(result.items);
        return result.items.fields.departementName;
    }

}

export default new Contentful();