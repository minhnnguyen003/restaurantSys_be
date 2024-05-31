import { Request, Response } from "express";
import InventoryItem from "../classes/InventoryItem";

export default function getAllInventoryItems(req: Request, res: Response) {
    // Query here
    
    // Data Setup
    
    // Return Object
    res.setHeader('Content-Type', 'application/json');
    res.json();
};