export default class InventoryItem {
    _itemId : number;
    _itemName : string;
    _itemQty: number;

    constructor (
        itemId : number,
        itemName : string,
        itemQty : number)
    {
        this._itemId = itemId;
        this._itemName = itemName;
        this._itemQty = itemQty;
    }    
}