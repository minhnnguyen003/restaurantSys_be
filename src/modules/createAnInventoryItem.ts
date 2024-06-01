import { Request, Response } from "express";
import InventoryItem from "../classes/InventoryItem";

export default function createAnInventoryItem(req: Request, res: Response) {
    // Parameter Handling
    
    // Data Setup
    
    // Return Object
    res.setHeader('Content-Type', 'application/json');
    res.json();
};