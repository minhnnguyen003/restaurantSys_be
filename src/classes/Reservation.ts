export default class Reservation {
    #reservationID : number;
    #customerID : string;
    #dateTime: Date;
    #tableId: number;

    constructor (
        reservationID : number,
        customerID : string,
        dateTime : string,
        tableID : number)
    {
        this.#reservationID = reservationID;
        this.#customerID = customerID;
        this.#dateTime = new Date(dateTime);
        this.#tableId = tableID;
    }

    // Getter for reservationID
    public get reservationID() : number {
        return this.#reservationID;
    }
    // --------------------------------------------------------
    // Getter Setter for item Quantity
    public get customerID() : string {
        return this.#customerID
    }
    
    public set itemName(newCustomerId : string) {
        this.#customerID = newCustomerId;
    }
    // --------------------------------------------------------
    // Getter Setter for item Quantity
    public get tableId() : number {
        return this.#tableId;
    }

    public set tableId(newTableId : number) {
        this.#tableId = newTableId;
    }
    // --------------------------------------------------------
    
}