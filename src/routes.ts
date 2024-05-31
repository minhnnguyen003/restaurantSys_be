import { Router } from "express";
import getTables from "./modules/getAllTables";
import getAvailableTables from "./modules/getAllAvailableTables";

// Equivalent
abstract class Routes {
    static _routes : Router;

    public static setRoutes() {
        this._routes = Router();

        this._routes.get('/', getTables);
        this._routes.get('/available', getAvailableTables);
    }
}

export default Routes;