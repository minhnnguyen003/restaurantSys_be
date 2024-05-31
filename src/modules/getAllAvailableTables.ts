import { Request, Response } from "express";
import Table  from "../classes/Table";

export default function getAvailableTables (req: Request, res: Response) {
    // Query here
    
    // Data Setup
    
    // Return Object
    res.setHeader('Content-Type', 'application/json');
    res.json({ a: 1, b : 2});
};