import axios from "axios";

export class RestcountriesClient {
    async fetchCountryByName(name) {
        return axios({
            method: 'GET',
            url: `${process.env.RESTCOUNTRIES_URL}/translation/${name.toLowerCase()}`,
            params: {
                fields: 'name,capital,currencies,languages,maps,population,flags,ccn3,region,subregion'
            } 
        });
        
    }

    async fetchCountryByCode(code) {
        return axios({
            method: 'GET',
            url: `${process.env.RESTCOUNTRIES_URL}/alpha`,
            params: {
                codes: code,
                fields: 'name,capital,currencies,languages,maps,population,flags,ccn3,region,subregion'
            } 
        });
        
    }
}