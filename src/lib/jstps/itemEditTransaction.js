import jstpsTransaction from './jstpsTransaction.js'

export class itemEditTransaction extends jstpsTransaction{
    constructor(itemToEdit,k,d,at,dd,c){
        super();

        this.itemToEdit = itemToEdit;

        this.oldKey = itemToEdit.key;
        this.oldDescription = itemToEdit.description;
        this.oldAssignedTo = itemToEdit.assigned_to;
        this.oldDueDate = itemToEdit.due_date;
        this.oldCompleted = itemToEdit.completed;

        this.newKey = k;
        this.newDescription = d;
        this.newAssignedTo = at;
        this.newDueDate = dd;
        this.newCompleted = c;
    }

    doTransaction(){
        this.itemToEdit.key = this.newKey;
        this.itemToEdit.description = this.newDescription;
        this.itemToEdit.assigned_to = this.newAssignedTo;
        this.itemToEdit.due_date = this.newDueDate;
        this.itemToEdit.completed = this.newCompleted;
    }

    undoTransaction(){
        this.itemToEdit.key = this.oldKey;
        this.itemToEdit.description = this.oldDescription;
        this.itemToEdit.assigned_to = this.oldAssignedTo;
        this.itemToEdit.due_date = this.oldDueDate;
        this.itemToEdit.completed = this.oldCompleted;
    }

    toString(){
        return "Item Edit " + this.itemToEdit.description + " " + this.itemToEdit.key;
    }
}

export default itemEditTransaction