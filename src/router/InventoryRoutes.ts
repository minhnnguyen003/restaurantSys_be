import { Router } from "express";
import getAllInventoryItems from "../modules/getAllInventoryItems";
import getAnInventoryItems from "../modules/getAnInventoryItem";
import changeAnInventoryItem from "../modules/changeAnInventoryItem";
import createAnInventoryItem from "../modules/createAnInventoryItem";

export default abstract class InventoryRoutes {
    static _routes : Router;

    public static setRoutes() : Router {
        this._routes = Router();

        this._routes.get('/', getAllInventoryItems);
        this._routes.get('/:id', getAnInventoryItems);
        this._routes.post('/', createAnInventoryItem);
        this._routes.put('/:id', changeAnInventoryItem);

        return this._routes;
    }
}