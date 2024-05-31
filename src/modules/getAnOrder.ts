import { Request, Response } from "express";
import Order from "../classes/Order";

export default function getAnOrder(req: Request, res: Response) {
    //Handle Order id

    // Query here
    
    // Data Setup
    
    // Return Object
    res.setHeader('Content-Type', 'application/json');
    res.json();
};