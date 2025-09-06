import axios from "axios";

export class RestcountriesClient {
    async fetchCountry(name) {
        return axios({
            method: 'GET',
            url: `${process.env.RESTCOUNTRIES_URL}/translation/${name.toLowerCase()}`,
            params: {
                fields: 'name,capital,currencies,languages,maps,population,flags,ccn3,region,subregion'
            } 
        });
        
    }
}