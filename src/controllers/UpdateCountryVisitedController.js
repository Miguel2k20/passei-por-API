import { openDb } from "../db";

export class UpdateCountryVisitedController {
    async handle(req, res) {
        try {
            const { notes }  = req.body;
            const { id } = req.params; 
            
            if(!notes) {
                return res.status(400).json({
                    message: "Bad request. 'notes' are required.",
                    status: 400
                });
            }

            const db = await openDb();
            db.run('UPDATE countries_visited SET notes = ? WHERE id = ?', [notes, id]);
            
            res.json({
                status: 200,
                message: "Country updated successfully"
            });
        } catch (error) {4
            res.status(500).json({
                message: "Internal server error",
                status: 500
            });
        }
    }
}
