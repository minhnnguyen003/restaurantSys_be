export default class FoodItem {
    _foodID: number;
    _name: string;
    _price: number;
    _category: string;

    constructor(foodID: number, name: string, price: number, category: string) {
        this._foodID = foodID;
        this._name = name;
        this._price = price;
        this._category = category;
    }
}