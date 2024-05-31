import { Router } from "express";
import createAReservation from "../modules/createAReservation";
import getAReservation from "../modules/getAReservation";


export default abstract class ReservationRoutes {
    static _routes : Router;

    public static setRoutes() : Router {
        this._routes = Router();

        this._routes.post('/', createAReservation);
        this._routes.get('/', getAReservation);
        return this._routes;
    }
}