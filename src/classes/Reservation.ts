export default class Reservation {
    _reservationID : number;
    _customerID : string;
    _dateTime: string;
    _tableId: number;

    constructor (
        reservationID : number,
        customerID : string,
        dateTime : string,
        tableID : number)
    {
        this._reservationID = reservationID;
        this._customerID = customerID;
        this._dateTime = dateTime;
        this._tableId = tableID;
    }    
}