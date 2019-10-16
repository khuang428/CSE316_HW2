import jstpsTransaction from './jstpsTransaction.js'

export class itemDeleteTransaction extends jstpsTransaction{
    constructor(todoList, itemToDelete){
        super();
        this.listToChange = todoList;
        this.itemToDelete = itemToDelete;
        this.oldList = todoList.items;
    }

    doTransaction(){
        let item = this.itemToDelete;
        this.newList = this.oldList.filter(function(val){ return val !== item});
        this.listToChange.items = this.newList;
    }

    undoTransaction(){
        this.listToChange.items = this.oldList;
        
    }

    toString(){
        return "Item Delete " + this.itemToDelete.description + " " + this.itemToDelete.key;
    }
}

export default itemDeleteTransaction