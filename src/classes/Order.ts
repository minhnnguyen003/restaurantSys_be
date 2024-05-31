import OrderTypes from "../enum/OrderTypes";
import OrderStatus from "../enum/OrderStatus";
import OrderFoodItem from "../types/OrderFoodItem";

export default class Order {
    _orderId : number;
    _date : Date;
    _type : OrderTypes;
    _status : OrderStatus;
    _customerId : number;
    _foodOrdered : OrderFoodItem[];

    constructor(orderId: number,
        date: Date,
        type: OrderTypes,
        status: OrderStatus,
        customerId: number,
    ){
        this._orderId = orderId;
        this._date = date;
        this._type = type;
        this._status = status;
        this._customerId = customerId;
        this._foodOrdered = [];
    }

    public addFoodItem(aFoodItem : OrderFoodItem) {
        this._foodOrdered.push(aFoodItem);
    }

    public get foodOrdered() : OrderFoodItem[] {
        return this._foodOrdered; 
    }

    public get orderId() : number {
        return this._orderId;
    }
    
    public get type() : OrderTypes {
        return this._type;
    }
    
    public get date() : Date {
        return this._date;
    }
    
    public get status() : OrderStatus {
        return this._status;
    }
    
    public get customerId() : number {
        return this._customerId;
    }
    
    public set customerId(newCustId : number) {
        this._customerId = newCustId;
    }
    
    
}