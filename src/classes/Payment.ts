import PaymentMethod from "../enum/PaymentMethod";

export default class Payment {
    _paymentId : number;
    _date : Date
    _amount : number;
    _paymentMethod : PaymentMethod;

    constructor (
        paymentId : number,
        amount : number,
        paymentMethod : PaymentMethod,
        date: string
    ){
        this._paymentId = paymentId;
        this._amount = amount;
        this._paymentMethod = paymentMethod;
        this._date = new Date(date);
    }
}