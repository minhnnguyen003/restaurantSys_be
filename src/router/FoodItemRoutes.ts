import { Router } from "express";
import getFoodItems from "../modules/getAFoodItems";
import getAFoodItem from "../modules/getAFoodItem";

export default abstract class FoodItemRoutes {
    static _routes : Router;

    public static setRoutes(): Router {
        this._routes.get('/', getFoodItems);
        this._routes.get('/:id', getAFoodItem);

        return this._routes;
    }
}