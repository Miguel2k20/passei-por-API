import { createCountriesVisitedTable } from './migrations/createCountrieVisitedTable.js';

export async function runMigrate() {
  await createCountriesVisitedTable();
}