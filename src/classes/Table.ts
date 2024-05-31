export default class Table {
    _tableId : number;
    _tableSize : number;
    _isAvailable : boolean;

    constructor(tableId : number, tableSize: number, isAvailable: boolean) {
        this._tableId = tableId;
        this._tableSize = tableSize;
        this._isAvailable = isAvailable;
    }


}