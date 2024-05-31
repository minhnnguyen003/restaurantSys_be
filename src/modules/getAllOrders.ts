import { Request, Response } from "express";
import Order from "../classes/Order";

export default function getAllOrders(req: Request, res: Response) {
    //Query String
    // startDate, endDate
    
    // Query here
    
    // Data Setup
    
    // Return Object
    res.setHeader('Content-Type', 'application/json');
    res.json();
};