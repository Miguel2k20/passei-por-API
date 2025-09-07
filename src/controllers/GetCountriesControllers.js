import { RestcountriesClient } from "../clients/RestcountriesClient";

export class GetCountriesControllers {
    async handle(req, res) {
        const client = new RestcountriesClient()
        
        try {
            const { country }  = req.query;
            if(!country) {
                return res.status(400).json({
                    message: "Bad request. 'country' is required.",
                    status: 400
                });
            }
            const response = await client.fetchCountryByName(country)
            res.json(response.data[0]);
        } catch (error) {
            res.status(500).json({
                message: "Internal server error",
                status: 500
            });
        }
    }
}
