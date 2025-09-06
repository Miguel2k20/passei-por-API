import { openDb } from "../db";

export class CreateCountryVisitedController {
    async handle(req, res) {
        try {
            const { notes, ccn3 }  = req.body;

            if(!notes || !ccn3) {
                return res.status(400).json({
                    message: "Bad request. 'notes' and 'ccn3' are required.",
                    status: 400
                });
            }

            const db = await openDb();
            db.run('INSERT INTO countries_visited (notes, ccn3) VALUES (?, ?)', [notes, ccn3]);
            
            res.json({
                status: 200,
                message: "Country registered successfully"
            });
        } catch (error) {4
            res.status(500).json({
                message: "Internal server error",
                status: 500
            });
        }
    }
}
