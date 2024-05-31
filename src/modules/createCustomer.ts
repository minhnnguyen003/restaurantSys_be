import { Request, Response } from "express";
import Customer from "../classes/Customer";
import DatabaseConnection from "../classes/DatabaseConnection";

export default function createCustomer(req: Request, res: Response) {
    //Handle Query String
    let phone = req.body.phone? req.body.phone : '';
    let name = req.body.name? req.body.name : '';
    let email = req.body.email? req.body.email : '';
    let insertId = 0;
    // Query here
    
    let query = DatabaseConnection.query(`INSERT INTO Customer(name, email, phone) VALUES ('${name}','${email}','${phone}');`);
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