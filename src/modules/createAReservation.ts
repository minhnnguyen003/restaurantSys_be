import { Request, Response } from "express";
import Reservation from "../classes/Reservation";

export default function createAReservation(req: Request, res: Response) {
    // Data Setup
    
    // Query here
    
    // Return Object
    res.setHeader('Content-Type', 'application/json');
    res.json();
};