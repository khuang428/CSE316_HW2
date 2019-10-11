import React, { Component } from 'react'

export class ListItemCard extends Component {
    moveUp(itemToMove,e){
        if(itemToMove.key != 0){
            let listToChange = this.props.todoList.items;
            listToChange.splice(itemToMove.key,1);
            listToChange.splice(itemToMove.key-1,0,itemToMove);

            //key swap
            let tkey = itemToMove.key;
            itemToMove.key = listToChange[itemToMove.key].key;
            listToChange[tkey].key = tkey;
        }

        e.stopPropagation();
    }
    moveDown(itemToMove,e){
        let listToChange = this.props.todoList.items;
        if(itemToMove.key != listToChange.length-1){
            listToChange.splice(itemToMove.key,1);
            listToChange.splice(itemToMove.key+1,0,itemToMove);

            //key swap
            let tkey = itemToMove.key;
            itemToMove.key = listToChange[itemToMove.key].key;
            listToChange[tkey].key = tkey;
        }  

        e.stopPropagation();
    }
    delete(itemToDelete, e){
        this.props.todoList.items.splice(itemToDelete.key,1);
        e.stopPropagation();
    }
    render() {
        return (
            <div className='list_item_card'
                 onClick={() => this.props.loadItem(this.props.listItem)}>
                <div className='list_item_card_description'>
                    {this.props.listItem.description}
                </div>
                <div className='list_item_card_assigned_to'>
                    Assigned To: <strong>{this.props.listItem.assigned_to}</strong>
                </div>
                <div className='list_item_card_due_date'>
                    {this.props.listItem.due_date}
                </div>
                    {this.props.listItem.completed ? <div className='list_item_card_completed'>Completed</div>: <div className='list_item_card_not_completed'>Pending</div>}
                <div className='list_item_card_toolbar'>
                    <div className='list_item_card_button'
                         onClick={e => this.moveUp(this.props.listItem, e)}>⇧</div>
                    <div className='list_item_card_button'
                         onClick={e => this.moveDown(this.props.listItem, e)}>⇩</div>
                    <div className='list_item_card_button'
                         onClick={e => this.delete(this.props.listItem, e)}>✕</div>
                </div>
            </div>
        )
    }
}

export default ListItemCard
