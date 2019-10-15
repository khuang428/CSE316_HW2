import jstpsTransaction from './jstpsTransaction.js'

export class listNameTransaction extends jstpsTransaction{
    constructor(todoList, name){
        super();
        this.listToChange = todoList;
        this.oldName = todoList.name;
        this.newName = name;
    }

    doTransaction(){
        this.listToChange.name = this.newName;
    }

    undoTransaction(){
        this.listToChange.name = this.oldName;
    }

    toString(){
        return "List Name Change to " + this.newName;
    }
}

export default listNameTransaction