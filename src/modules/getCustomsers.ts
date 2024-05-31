import { Request, Response } from "express";
import Customer from "../classes/Customer";
import DatabaseConnection from "../classes/DatabaseConnection";
import customerTableTypes from "../types/CustomerTableTypes";

export default async function getCustomer(req: Request, res: Response) {
    //Handle Query String
    let phone = req.query.phone? req.query.phone: '';
    let name = req.query.name? req.query.name: '';
    let customerList : Customer[] = [];
    let query = `SELECT * FROM Customer;`;
    // Query here
    if(!phone || !name) query = `SELECT * FROM Customer WHERE phone='${phone}' OR name LIKE '${name}%';`;

    
    let DBquery = DatabaseConnection.query(query);
    DBquery
    .on('error', (err) => {
        console.log(err);
    })
    .on('result', (result : customerTableTypes) => {
        customerList.push(new Customer(result.id, result.name, result.email, result.phone));
    })
    .on('end', () => {
        res.json(customerList);
    })
};