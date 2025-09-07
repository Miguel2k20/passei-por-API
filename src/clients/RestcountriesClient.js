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
        const codeParam = Array.isArray(code) ? code.join(',') : code;

        return axios({
            method: 'GET',
            url: `${process.env.RESTCOUNTRIES_URL}/alpha`,
            params: {
                codes: codeParam,
                fields: 'name,translations,capital,currencies,maps,population,flags,ccn3,region,subregion'
            } 
        });
        
    }
}