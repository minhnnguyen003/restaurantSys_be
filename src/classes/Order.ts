import OrderTypes from "../enum/OrderTypes";
import OrderStatus from "../enum/OrderStatus";
import OrderFoodItem from "../types/OrderFoodItem";

export default class Order {
    #orderId : number;
    #date : Date;
    #type : OrderTypes;
    #status : OrderStatus;
    #customerId : number;
    #foodOrdered : OrderFoodItem[];

    constructor(orderId: number,
        date: Date,
        type: OrderTypes,
        status: OrderStatus,
        customerId: number,
    ){
        this.#orderId = orderId;
        this.#date = date;
        this.#type = type;
        this.#status = status;
        this.#customerId = customerId;
        this.#foodOrdered = [];
    }

    public addFoodItem(aFoodItem : OrderFoodItem) {
        this.#foodOrdered.push(aFoodItem);
    }

    public get foodOrdered() : OrderFoodItem[] {
        return this.#foodOrdered; 
    }

    public get orderId() : number {
        return this.#orderId;
    }
    
    public get type() : OrderTypes {
        return this.#type;
    }
    
    public get date() : Date {
        return this.#date;
    }
    
    public get status() : OrderStatus {
        return this.#status;
    }
    
    public get customerId() : number {
        return this.#customerId;
    }
    
    public set customerId(newCustId : number) {
        this.#customerId = newCustId;
    }
    
    
}