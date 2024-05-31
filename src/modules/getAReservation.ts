import { Request, Response } from "express";
import DatabaseConnection from "../classes/DatabaseConnection";

export default function getAReservation(req: Request, res: Response) {
    //Handle Order Id
    
    
    // Return Object
    res.setHeader('Content-Type', 'application/json');
    res.json();
};