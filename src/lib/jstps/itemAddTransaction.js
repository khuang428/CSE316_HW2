import jstpsTransaction from './jstpsTransaction.js'

export class itemAddTransaction extends jstpsTransaction{
    constructor(todoList, itemToAdd){
        super();

        this.listToChange = todoList;
        this.itemToAdd = itemToAdd;
        this.oldList = todoList.items;
    }

    doTransaction(){
        this.newList = this.oldList.filter(function(val){return true});
        this.newList.push(this.itemToAdd);
        this.listToChange.items = this.newList;
    }

    undoTransaction(){
        this.listToChange.items = this.oldList;
    }

    toString(){
        return "Add Item " + this.itemToAdd.description + this.itemToAdd.key;
    }

}

export default itemAddTransaction