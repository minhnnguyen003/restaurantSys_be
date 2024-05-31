export default class Customer {
    _customerId: number;
    _customerName: string;
    _customerEmail: string;
    _customerPhone: string;

    constructor(
        customerId: number,
        customerName: string,
        customerEmail: string,
        customerPhone: string,) 
    {
        this._customerId = customerId;
        this._customerName = customerName;
        this._customerPhone = customerPhone;
        this._customerEmail = customerEmail;
    }
}