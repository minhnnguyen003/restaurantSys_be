import { Request, Response } from "express";
import Table  from "../classes/Table";
import DatabaseConnection from "../classes/DatabaseConnection";
import TableTableTypes from "../types/TableTableTypes";

export default function getAvailableTables (req: Request, res: Response) {
    let partySize = req.query.size ? req.query.size : 0;
    let tableList : Table[] = [];

    let DBquery = DatabaseConnection.query(`SELECT * FROM \`Table\` WHERE size > ${partySize} AND available = 1;`);
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