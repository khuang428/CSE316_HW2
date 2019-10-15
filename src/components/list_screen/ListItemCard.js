import React, { Component } from 'react'
import itemDeleteTransaction from '../../lib/jstps/itemDeleteTransaction';

export class ListItemCard extends Component {
    moveUp(itemToMove,e){
            let listToChange = this.props.todoList.items;
            if(listToChange[0] !== itemToMove){
                let i = listToChange.indexOf(itemToMove);
                listToChange.splice(i,1);
                listToChange.splice(i-1,0,itemToMove);
                this.props.loadList(this.props.todoList);
            }

        e.stopPropagation();
    }
    moveDown(itemToMove,e){
        let listToChange = this.props.todoList.items;
        if(listToChange[listToChange.length -1] !== itemToMove){
            let i = listToChange.indexOf(itemToMove);
            listToChange.splice(i,1);
            listToChange.splice(i+1,0,itemToMove);
            this.props.loadList(this.props.todoList);
        }  

        e.stopPropagation();
    }
    deleteItem(itemToDelete, e){
        this.props.todoList.items = this.props.todoList.items.filter(function(val){ return val !== itemToDelete});
        for(let i = 0;i < this.props.todoList.items.length;i++){
            if(this.props.todoList.items[i].key > itemToDelete.key){
                this.props.todoList.items[i].key--;
            }
        }
        this.props.loadList(this.props.todoList);
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
                    {this.props.listItem === this.props.todoList.items[0] ? <div className="list_item_card_button disabled" onClick={e => this.moveUp(this.props.listItem, e)}>⇧</div>
                                                  :  <div className="list_item_card_button" onClick={e => this.moveUp(this.props.listItem, e)}>⇧</div>}
                    {this.props.listItem === this.props.todoList.items[this.props.todoList.items.length-1] ? <div className="list_item_card_button disabled" onClick={e => this.moveDown(this.props.listItem, e)}>⇩</div>
                                                  :  <div className="list_item_card_button" onClick={e => this.moveDown(this.props.listItem, e)}>⇩</div>}
                         
                    <div className='list_item_card_button'
                         onClick={e => this.deleteItem(this.props.listItem, e)}>✕</div>
                </div>
            </div>
        )
    }
}

export default ListItemCard
