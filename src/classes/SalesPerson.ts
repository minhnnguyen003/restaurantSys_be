import Staff from "./Staff";
import Position from "../enum/Position";

export default class SalesPerson extends Staff {
    constructor(staffId : number,
        name : string,
        dob : string,
        address : string) {

        super(staffId, name, dob, Position.SALESPERSON, address);
    }
}