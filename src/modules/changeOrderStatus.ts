import { Request, Response } from "express";
import Order from "../classes/Order";

export default function changeOrderStatus(req: Request, res: Response) {
    //Handle Order Id

    // Query here
    
    // Data Setup
    
    // Return Object
    res.setHeader('Content-Type', 'application/json');
    res.json();
};