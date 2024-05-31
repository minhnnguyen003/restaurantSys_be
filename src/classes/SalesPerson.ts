
export default class SalesPerson extends Staff {

    constructor(staffId : number,
        name : string,
        dob : string,
        address : string) {

        super(staffId, name, dob, position.SALESPERSON, address);
    }

    /*
        Manage Order
        Generate/Access Sales Report
        Create Payment & Invoices
    */ 
}