import React, { Component } from 'react'
import ListItemCard from './ListItemCard'

export class ListItemsTable extends Component {
    state={
        currentSort: null
    }

    sortByDescription(){
        if(this.state.currentSort == "descriptionIncreasing"){
            this.setState({currentSort: "descriptionDecreasing"});
        }else{
            this.setState({currentSort: "descriptionIncreasing"});
        }
    }

    sortByDueDate(){
        if(this.state.currentSort == "dueDateIncreasing"){
            this.setState({currentSort: "dueDateDecreasing"});
        }else{
            this.setState({currentSort: "dueDateIncreasing"});
        }
    }

    sortByCompleted(){
        if(this.state.currentSort == "completedIncreasing"){
            this.setState({currentSort: "completedDecreasing"});
        }else{
            this.setState({currentSort: "completedIncreasing"});
        }
    }

    compare(a,b){
        if(this.state.currentSort == "descriptionDecreasing" || this.state.currentSort == "dueDateDecreasing" || this.state.currentSort == "completedDecreasing"){
            let temp = a;
            a = b;
            b = temp;
        }
        if(this.state.currentSort == "descriptionIncreasing" || this.state.currentSort == "descriptionDecreasing"){
            if(a.description < b.description){
                return -1;
            }else if(a.description > b.description){
                return 1;
            }else{
                return 0;
            }
        }else if(this.state.currentSort == "dueDateIncreasing" || this.state.currentSort == "dueDateDecreasing"){
            if(a.due_date < b.due_date){
                return -1;
            }else if(a.due_date > b.due_date){
                return 1;
            }else{
                return 0;
            }
        }else{
            if(a.completed < b.completed){
                return -1;
            }else if(a.completed > b.completed){
                return 1;
            }else{
                return 0;
            }
        }
    }

    sortItems(sortCriteria){
        this.setState({currentSort: sortCriteria}, 
                       function(){this.props.todoList.items.sort(this.compare.bind(this));
                                  this.props.loadList(this.props.todoList)});
    }

    addItem(){
        let newItem = {
            //key will be added in the item screen
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
                <div className = "list_item_header_card">
                    <div className ="list_item_task_header" 
                         onClick = {this.state.currentSort == "descriptionIncreasing" ? 
                                    () => this.sortItems("descriptionDecreasing") : 
                                    () => this.sortItems("descriptionIncreasing")}>Task</div>
                    <div className = "list_item_due_date_header"
                         onClick = {this.state.currentSort == "dueDateIncreasing" ?
                                    () => this.sortItems("dueDateDecreasing") :
                                    () => this.sortItems("dueDateIncreasing")}>Due Date</div>
                    <div className = "list_item_status_header"
                         onClick = {this.state.currentSort == "completedIncreasing" ?
                                    () => this.sortItems("completedDecreasing") :
                                    () => this.sortItems("completedIncreasing")}>Status</div>
                </div>
                {
                    this.props.todoList.items.map((todoItem)=>(
                            <ListItemCard 
                            key={todoItem.key}
                            listItem={todoItem} 
                            loadItem={this.props.loadItem}
                            todoList={this.props.todoList}
                            loadList={this.props.loadList}
                            tps={this.props.tps}/>
                    ))
                }
                <div className ="list_item_add_card" onClick={() => this.props.loadItem(this.addItem())}>+</div>
            </div>
        )
    }
}

export default ListItemsTable
