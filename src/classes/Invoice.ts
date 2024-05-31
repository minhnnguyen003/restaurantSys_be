export default class Invoice {
    #orderID : number;
    #date : Date
    #amount : number;
    #customerID : number;

    constructor (
        orderID : number,
        amount : number,
        customerID : number,
        date: string
    ){
        this.#orderID = orderID;
        this.#amount = amount;
        this.#customerID = customerID;
        this.#date = new Date(date);
    }
}