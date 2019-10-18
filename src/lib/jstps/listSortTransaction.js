import jstpsTransaction from "./jstpsTransaction";

export class listSortTransaction extends jstpsTransaction{
    constructor(todoList,compare){
        super();

        this.compare = compare;
        this.listToChange = todoList.items;
        this.oldList = new Array();
        for(let i = 0;i < this.listToChange.length;i++){
            this.oldList.push({key: this.listToChange[i].key, description: this.listToChange[i].description, assigned_to: this.listToChange[i].assigned_to, due_date: this.listToChange[i].due_date, completed: this.listToChange[i].completed});
        }
        this.newList = new Array();
        for(let i = 0;i < this.listToChange.length;i++){
            this.newList.push({key: this.listToChange[i].key, description: this.listToChange[i].description, assigned_to: this.listToChange[i].assigned_to, due_date: this.listToChange[i].due_date, completed: this.listToChange[i].completed});
        }
        this.newList.sort(this.compare);
    }

    doTransaction(){
        for(let i = 0;i < this.newList.length;i++){
            this.listToChange[i] = ({key: this.newList[i].key, description: this.newList[i].description, assigned_to: this.newList[i].assigned_to, due_date: this.newList[i].due_date, completed: this.newList[i].completed});
        }
    }

    undoTransaction(){
        for(let i = 0;i < this.oldList.length;i++){
            this.listToChange[i] = ({key: this.oldList[i].key, description: this.oldList[i].description, assigned_to: this.oldList[i].assigned_to, due_date: this.oldList[i].due_date, completed: this.oldList[i].completed});
        }
    }

    toString(){
        return "Sort";
    }
}

export default listSortTransaction