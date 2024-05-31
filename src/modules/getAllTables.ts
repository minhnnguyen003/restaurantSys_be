import { Request, Response } from "express";
import Table  from "../classes/Table";
import DatabaseConnection from "../classes/DatabaseConnection";
import TableTableTypes from "../types/TableTableTypes";

export default function getTables (req: Request, res: Response) {
    let partySize = req.query.size ? req.query.size : 0;
    let tableList : Table[] = [];
    // Query here

    
    let DBquery = DatabaseConnection.query(`SELECT * FROM \`Table\` WHERE size > ${partySize};`);
    DBquery
    .on('error', (err) => {
        console.log(err);
    })
    .on('result', (result : TableTableTypes) => {
        tableList.push(new Table(result.id, result.size, result.available));
    })
    .on('end', () => {
        res.json(tableList);
    })
};