import { Request, Response } from "express";
import InventoryItem from "../classes/InventoryItem";

export default function getAnInventoryItems(req: Request, res: Response) {
    // Parameter here
    
    // Data Setup
    
    // Return Object
    res.setHeader('Content-Type', 'application/json');
    res.json();
};