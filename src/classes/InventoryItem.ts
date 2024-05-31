export default class InventoryItem {
    #itemId : number;
    #itemName : string;
    #itemQty: number;

    constructor (
        itemId : number,
        itemName : string,
        itemQty : number)
    {
        this.#itemId = itemId;
        this.#itemName = itemName;
        this.#itemQty = itemQty;
    }

    // Getter for itemID
    public get itemId() : number {
        return this.#itemId;
    }
    // --------------------------------------------------------
    // Getter Setter for item Quantity
    public get itemName() : string {
        return this.#itemName
    }
    
    public set itemName(newItemName : string) {
        this.#itemName = newItemName;
    }
    // --------------------------------------------------------
    // Getter Setter for item Quantity
    public get itemQty() : number {
        return this.#itemQty;
    }

    public set itemQty(newQty : number) {
        this.#itemQty = newQty;
    }
    // --------------------------------------------------------
    
}