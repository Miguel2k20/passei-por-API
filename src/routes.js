import { Router } from "express";
import { GetCountriesControllers } from "./controllers/GetCountriesControllers";
import { CreateCountryVisitedController } from "./controllers/CreateCountryVisitedController";
import { UpdateCountryVisitedController } from "./controllers/UpdateCountryVisitedController";
import { DeleteCountryVisitedController } from "./controllers/DeleteCountryVisitedController";
import { GetCountriesVisited } from "./controllers/GetCountriesVisited";

const getCountriesControllers = new GetCountriesControllers();
const createCountryVisitedController = new CreateCountryVisitedController()
const updateCountryVisitedController = new UpdateCountryVisitedController()
const deleteCountryVisitedController = new DeleteCountryVisitedController()
const getCountriesVisited = new GetCountriesVisited()
const routes = Router()

routes.get('/country', getCountriesControllers.handle);
routes.post('/country', createCountryVisitedController.handle);
routes.put('/country/:id', updateCountryVisitedController.handle);
routes.delete('/country/:id', deleteCountryVisitedController.handle);
routes.get('/country-visited/:id', getCountriesVisited.handle);

export default routes;