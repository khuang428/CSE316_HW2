import React, { Component } from 'react'
import ListItemCard from './ListItemCard'

export class ListItemsTable extends Component {
    addItem(){
        let newItem = {
            "description": "",
            "assigned_to": "",
            "due_date": "",
            "completed": false
        }

        return newItem;
    }
    render() {
        return (
            <div id="list_items_container">
                <div class = "list_item_header_card">
                    <div class="list_item_task_header">Task</div>
                    <div class="list_item_due_date_header">Due Date</div>
                    <div class="list_item_status_header">Status</div>
                </div>
                {
                    this.props.todoList.items.map((todoItem)=>(
                            <ListItemCard 
                            key={todoItem.key}
                            listItem={todoItem} 
                            loadItem={this.props.loadItem}
                            todoList={this.props.todoList}
                            loadList={this.props.loadList}/>
                    ))
                }
                <div class="list_item_add_card" onClick={() => this.props.loadItem(this.addItem())}>+</div>
            </div>
        )
    }
}

export default ListItemsTable
