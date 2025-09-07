import { RestcountriesClient } from "../clients/RestcountriesClient";
import { openDb } from "../db";

export class GetCountryVisited {
    async handle(req, res) {
        try {
            const { id } = req.params; 
            const db = await openDb();
            const client = new RestcountriesClient()
            
            const country = await db.get('SELECT * FROM countries_visited WHERE id = ?', [id]);

            if(!country) {
                return res.status(404).json({
                    message: "Country not found",
                    status: 404
                });
            }
            
            const infoCountry = await client.fetchCountryByCode(country.ccn3);

            if(infoCountry.status !== 200) {
                return res.status(404).json({
                    message: "Country information not found",
                    status: 404
                });
            }

            const countryWithInfo = {
                ...country,
                infoCountry: infoCountry.data[0]
            };

            res.json(countryWithInfo);
            
        } catch (error) {

            console.error("Error fetching country visited:", error);

            res.status(500).json({
                message: "Internal server error",
                status: 500
            });
        }
    }
}
