export default class Customer {
    #customerId: number;
    #customerName: string;
    #customerEmail: string;
    #customerPhone: string;

    constructor(
        customerId: number,
        customerName: string,
        customerEmail: string,
        customerPhone: string,) 
    {
        this.#customerId = customerId;
        this.#customerName = customerName;
        this.#customerPhone = customerPhone;
        this.#customerEmail = customerEmail;
    }
}