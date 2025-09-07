import axios from "axios";

export class RestcountriesClient {
    async fetchCountryByName(name) {
        return axios({
            method: 'GET',
            url: `${process.env.RESTCOUNTRIES_URL}/translation/${name.toLowerCase()}`,
            params: {
                fields: 'name,translations,capital,currencies,maps,population,flags,ccn3,region,subregion'
            } 
        });
        
    }

    async fetchAllCountries() {
        return axios({
            method: 'GET',
            url: `${process.env.RESTCOUNTRIES_URL}/all`,
            params: {
                fields: 'name,translations,capital,currencies,maps,population,flags,ccn3,region,subregion'
            } 
        });
        
    }

    async fetchCountryByCode(code) {
        return axios({
            method: 'GET',
            url: `${process.env.RESTCOUNTRIES_URL}/alpha`,
            params: {
                codes: code,
                fields: 'name,translations,capital,currencies,maps,population,flags,ccn3,region,subregion'
            } 
        });
        
    }
}