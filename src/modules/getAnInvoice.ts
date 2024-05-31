import { Request, Response } from "express";
import Invoice from "../classes/Invoice";

export default function getInvoice(req: Request, res: Response) {
    //Handle parameter

    // Query here
    
    // Data Setup
    
    // Return Object
    res.setHeader('Content-Type', 'application/json');
    res.json();
};