import { RestcountriesClient } from "../clients/RestcountriesClient";

export class GetCountriesControllers {
    async handle(req, res) {
        const client = new RestcountriesClient()
        
        try {
            const { country }  = req.query;
            if(!country) {
                const response = await client.fetchAllCountries()
                res.json(response.data);
            }
            const response = await client.fetchCountryByName(country)
            res.json(response.data);
        } catch (error) {
            res.status(500).json({
                message: "Internal server error",
                status: 500
            });
        }
    }
}
