import jstpsTransaction from './jstpsTransaction.js'

export class itemDeleteTransaction extends jstpsTransaction{
    constructor(todoList, itemToDelete){
        super();
        this.listToChange = todoList;
        this.itemToDelete = itemToDelete;
        this.oldList = todoList.items;
    }

    doTransaction(){
        
    }

    undoTransaction(){
        this.listToChange.items = this.oldList;
    }

    toString(){
        return "Item Delete " + this.itemToDelete.description + " " + this.itemToDelete.key;
    }
}

export default itemDeleteTransaction