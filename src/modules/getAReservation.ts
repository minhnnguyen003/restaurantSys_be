import { Request, Response } from "express";
import Reservation from "../classes/Reservation";

export default function getAReservation(req: Request, res: Response) {
    //Handle Order Id

    // Query here
    
    // Data Setup
    
    // Return Object
    res.setHeader('Content-Type', 'application/json');
    res.json();
};