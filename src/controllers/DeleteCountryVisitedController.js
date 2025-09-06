import { openDb } from "../db";

export class DeleteCountryVisitedController {
    async handle(req, res) {
        try {
            const { id } = req.params; 

            const db = await openDb();
            db.run('DELETE FROM countries_visited WHERE id = ?', [id]);

            res.json({
                status: 200,
                message: "Country deleted successfully"
            });
        } catch (error) {4
            res.status(500).json({
                message: "Internal server error",
                status: 500
            });
        }
    }
}
