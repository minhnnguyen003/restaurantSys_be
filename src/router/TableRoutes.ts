import { Router } from "express";
import getTables from "../modules/getAllTables";
import getAvailableTables from "../modules/getAllAvailableTables";

export default abstract class TableRoutes {
    static _routes : Router;

    public static setRoutes() : Router {
        this._routes = Router();

        this._routes.get('/', getTables);
        this._routes.get('/available', getAvailableTables);

        return this._routes;
    }
}