import { Request, Response } from "express";
import DatabaseConnection from "../classes/DatabaseConnection";

export default function createAReservation(req: Request, res: Response) {
    let customerId = req.body.customerId? req.body.customerId : 0;
    let tableId = req.body.tableId? req.body.tableId: 0;
    let dateTime = req.body.dateTime? req.body.dateTime: 'NOW()';
    let partySize = req.body.partySize? req.body.partySize: 4;
    let insertId = -1;
    
    // Query here
    let query = DatabaseConnection.query(`INSERT INTO Reservation(customerId, tableId, dateTime, partySize) VALUES (${customerId}, ${tableId}, '${dateTime}', ${partySize});`);
    query
    .on('error', (err) => {
        console.log(err);
    })
    .on('result', (row) => {
        insertId = row.insertId;
    })
    .on('end', () => {
        res.json(insertId);
    })
};