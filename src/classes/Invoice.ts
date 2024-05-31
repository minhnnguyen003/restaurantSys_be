export default class Invoice {
    _orderID : number;
    _date : Date
    _amount : number;
    _customerID : number;

    constructor (
        orderID : number,
        amount : number,
        customerID : number,
        date: string
    ){
        this._orderID = orderID;
        this._amount = amount;
        this._customerID = customerID;
        this._date = new Date(date);
    }
}