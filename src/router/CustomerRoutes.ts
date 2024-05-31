import { Router } from "express";
import getCustomer from "../modules/getCustomsers";
import createCustomer from "../modules/createCustomer";

export default abstract class CustomerRoutes {
    static _routes : Router;

    public static setRoutes() : Router {
        this._routes = Router();

        this._routes.get('/', getCustomer);
        this._routes.post('/', createCustomer);

        return this._routes;
    }
}