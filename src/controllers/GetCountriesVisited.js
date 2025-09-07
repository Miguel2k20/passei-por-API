import { json } from "express";
import { RestcountriesClient } from "../clients/RestcountriesClient";
import { openDb } from "../db";

export class GetCountriesVisited {
    async handle(req, res) {
        try {
            const db = await openDb();
            const client = new RestcountriesClient()
            
            const countries = await db.all('SELECT ccn3, notes FROM countries_visited');

            if(!countries) {
                return res.status(404).json({
                    message: "Countries visited not found",
                    status: 404
                });
            }

            const ccn3List = countries.map(country => country.ccn3).filter(ccn3 => ccn3 !== null);
            const countriesInfo = await client.fetchCountryByCode(ccn3List);

            if(countriesInfo.status !== 200) {
                return res.status(404).json({
                    message: "Country information not found",
                    status: 404
                });
            }

            
            const merged = countriesInfo.data.map(apiCountry => {
                const visited = countries.find(c => c.ccn3 === apiCountry.ccn3);
                return {
                    ...apiCountry,
                    notes: visited?.notes || null,
                    visited: true
                };
            });
            
            res.json(merged)
            

        } catch (error) {

            console.error("Error fetching country visited:", error);

            res.status(500).json({
                message: "Internal server error",
                status: 500
            });
        }
    }
}
