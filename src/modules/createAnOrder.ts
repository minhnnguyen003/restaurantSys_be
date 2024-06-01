import { Request, Response } from "express";

export default function createAnOrder(req: Request, res: Response) {

    // Query here
    
    // Data Setup
    
    // Return Object
    res.setHeader('Content-Type', 'application/json');
    res.json();
};