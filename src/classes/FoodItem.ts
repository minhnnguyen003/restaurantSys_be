export default class FoodItem {
    foodID: number;
    name: string;
    price: number;
    category: string;

    constructor(foodID: number, name: string, price: number, category: string) {
        this.foodID = foodID;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}