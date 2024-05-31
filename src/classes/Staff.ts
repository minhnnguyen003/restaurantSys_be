import Position from "../enum/Position";

abstract class Staff {
    #staffId: number;
    #name: string;
    #dob: Date;
    #position: Position;
    #address: string;

    constructor(userId : number,
        name : string,
        dob : string,
        position : Position,
        address : string) {

            this.#staffId = userId;
            this.#name = name;
            this.#dob = new Date(dob);
            this.#position = position;
            this.#address = address;
    }
}