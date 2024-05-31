import { Request, Response } from "express";
import Invoice from "../classes/Invoice";

export default function createInvoice(req: Request, res: Response) {

    // Query here
    
    // Data Setup
    
    // Return Object
    res.setHeader('Content-Type', 'application/json');
    res.json();
};