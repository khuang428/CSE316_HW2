import jstpsTransaction from './jstpsTransaction.js'

export class listOwnerTransaction extends jstpsTransaction{
    constructor(todoList, owner){
        super();
        this.listToChange = todoList;
        this.oldOwner = todoList.owner;
        this.newOwner = owner;
    }

    doTransaction(){
        this.listToChange.owner = this.newOwner;
    }

    undoTransaction(){
        this.listToChange.owner = this.oldOwner;
    }

    toString(){
        return "List Owner Change to " + this.newOwner;
    }
}

export default listOwnerTransaction