import { Request, Response } from "express";
import Order from "../classes/Order";

export default function postNewOrder(req: Request, res: Response) {
    // Query here
    
    // Data Setup
    
    // Return Object
    res.setHeader('Content-Type', 'application/json');
    res.json();
};