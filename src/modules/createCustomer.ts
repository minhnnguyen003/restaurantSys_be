import { Request, Response } from "express";
import Customer from "../classes/Customer";
import DatabaseConnection from "../classes/DatabaseConnection";

export default function createCustomer(req: Request, res: Response) {
    //Handle Query String
    let phone = req.query.phone
    let name = req.query.name
    // Query here
    
    let query = DatabaseConnection.query(`SELECT * FROM Customer WHERE phone='${phone}' OR name LIKE '%${name}%';`);
    query
    .on('error', (err) => {
        console.log(err);
    })
    .on('result', (row) => {
        console.log(row);
    })

    // Data Setup
    
    // Return Object
    res.setHeader('Content-Type', 'application/json');
    res.json();
};