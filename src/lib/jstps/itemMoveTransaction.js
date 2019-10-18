import jstpsTransaction from './jstpsTransaction.js'

export class itemMoveTransaction extends jstpsTransaction{
    constructor(todoList, itemToMove, direction){
        super();
        this.listToChange = todoList.items;
        this.itemToMove = itemToMove;
        this.direction = direction;
        this.index = this.listToChange.indexOf(this.itemToMove);
    }

    doTransaction(){
        this.listToChange[this.index] = this.listToChange[this.index-this.direction];
        this.listToChange[this.index-this.direction] = this.itemToMove;
    }

    undoTransaction(){
        this.listToChange[this.index-this.direction] = this.listToChange[this.index];
        this.listToChange[this.index] = this.itemToMove;
    }

    toString(){
        return "Item Move " + this.itemToMove.description + " " + this.itemToMove.key;
    }
}

export default itemMoveTransaction