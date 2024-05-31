import { Request, Response } from "express";
import FoodItem from "../classes/FoodItem";

export default function getFoodItems(req: Request, res: Response) {
    // Query here
    
    // Data Setup
    
    // Return Object
    res.setHeader('Content-Type', 'application/json');
    res.json();
};