enum VehicleType {
    MOTORCYCLE,
    BIKE, 
    CAR
}

export default class DeliveryPerson extends Staff {
    #regoNumber : string
    #vehicleType: VehicleType

    constructor(staffId : number,
        name : string,
        dob : string,
        address : string,
        regoNumber : string,
        vehicleType : VehicleType) {
        
        super(staffId, name, dob, position.DELIVERYPERSON, address);
        this.#regoNumber = regoNumber;
        this.#vehicleType = vehicleType;
    }

    /*
        Manage Order
        Generate/Access Sales Report
        Create Payment & Invoices
    */ 
}