import React, { Component } from 'react'
import itemDeleteTransaction from '../../lib/jstps/itemDeleteTransaction';
import itemMoveTransaction from '../../lib/jstps/itemMoveTransaction';

export class ListItemCard extends Component {
    moveUp(itemToMove,e){
        this.props.tps.addTransaction(new itemMoveTransaction(this.props.todoList, itemToMove, 1));
        this.props.loadList(this.props.todoList);
        e.stopPropagation();
    }
    moveDown(itemToMove,e){
        this.props.tps.addTransaction(new itemMoveTransaction(this.props.todoList, itemToMove, -1));
        this.props.loadList(this.props.todoList);
        e.stopPropagation();
    }
    deleteItem(itemToDelete, e){
        this.props.tps.addTransaction(new itemDeleteTransaction(this.props.todoList, itemToDelete));
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
