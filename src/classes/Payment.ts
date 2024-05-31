import PaymentMethod from "../enum/PaymentMethod";

export default class Payment {
    #paymentId : number;
    #date : Date
    #amount : number;
    #paymentMethod : PaymentMethod;

    constructor (
        paymentId : number,
        amount : number,
        paymentMethod : PaymentMethod,
        date: string
    ){
        this.#paymentId = paymentId;
        this.#amount = amount;
        this.#paymentMethod = paymentMethod;
        this.#date = new Date(date);
    }
}