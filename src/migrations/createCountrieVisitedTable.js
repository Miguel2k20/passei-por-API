import { openDb } from '../db';

export async function createCountriesVisitedTable() {
  openDb().then(db => {
    db.exec(`
        CREATE TABLE IF NOT EXISTS countries_visited (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          ccn3 TEXT NOT NULL,
          notes TEXT NOT NULL
        )
    `);
  })
}
