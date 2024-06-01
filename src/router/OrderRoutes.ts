import { Router } from "express";
import createAnOrder from "../modules/createAnOrder";
import getAnOrder from "../modules/getAnOrder";
import getAllOrders from "../modules/getAllOrders";
import changeOrderStatus from "../modules/changeOrderStatus";


export default abstract class OrderRoutes {
    static _routes : Router;

    public static setRoutes() : Router {
        this._routes = Router();

        this._routes.post('/', createAnOrder);
        this._routes.get('/:id', getAnOrder);
        this._routes.get('/', getAllOrders);
        this._routes.put('/:id', changeOrderStatus);
        this._routes.post('/order-food-items')
        return this._routes;
    }
}