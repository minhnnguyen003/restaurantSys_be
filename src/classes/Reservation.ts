export default class Reservation {
    _reservationID : number;
    _customerID : number;
    _dateTime: string;
    _tableId: number;

    constructor (
        reservationID : number,
        customerID : number,
        dateTime : string,
        tableID : number)
    {
        this._reservationID = reservationID;
        this._customerID = customerID;
        this._dateTime = dateTime;
        this._tableId = tableID;
    }    
}