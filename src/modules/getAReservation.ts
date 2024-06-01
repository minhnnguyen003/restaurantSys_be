import { Request, Response } from "express";
import Reservation from "../classes/Reservation";
import DatabaseConnection from "../classes/DatabaseConnection";
import ReservationTableTypes from "../types/ReservationIdTypes";

export default function getAReservation(req: Request, res: Response) {
    //Handle Order Id
    let reservationId = req.params.id;
    let reservation : Reservation;
    // Query here

    
    let DBquery = DatabaseConnection.query(`SELECT * FROM Reservation WHERE id=${reservationId}`);
    DBquery
    .on('error', (err) => {
        console.log(err);
    })
    .on('result', (result : ReservationTableTypes) => {
        reservation = new Reservation(result.id, result.customerId, result.dateTime, result.tableId);
    })
    .on('end', () => {
        res.json(reservation);
    })
};