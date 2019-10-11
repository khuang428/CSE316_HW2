import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class ItemScreen extends Component {
    state = {
        description: this.props.todoItem.description,
        assigned_to: this.props.todoItem.assigned_to,
        due_date: this.props.todoItem.due_date,
        completed: this.props.todoItem.completed
    }
    handleSubmit(){
        this.props.todoItem.description = this.state.description;
        this.props.todoItem.assigned_to = this.state.assigned_to;
        this.props.todoItem.due_date = this.state.due_date;
        this.props.todoItem.completed = this.state.completed;
        if(this.props.todoItem.key == null){
            this.props.todoItem.key = this.props.todoList.items.length;
            this.props.todoList.items.push(this.props.todoItem);
        }
        this.props.loadList(this.props.todoList);
    }
    render() {
        return (
            <div id = "todo_item">
                <h3 id="item_heading">Item</h3>
                <div id="item_form_container">
                    <div id="item_description_prompt" class="item_prompt">Description:</div>
                    <input id="item_description_textfield" class="item_input" type="input" 
                            defaultValue={this.props.todoItem.description}
                            onChange={e => this.setState({description: e.target.value})}/>
                    <div id="item_assigned_to_prompt" class="item_prompt">Assigned To:</div>
                    <input id="item_assigned_to_textfield" class="item_input" type="input" 
                            defaultValue={this.props.todoItem.assigned_to}
                            onChange={e => this.setState({assigned_to: e.target.value})}/>
                    <div id="item_due_date_prompt" class="item_prompt">Due Date:</div>
                    <input id="item_due_date_picker" class="item_input" type="date" 
                            defaultValue={this.props.todoItem.due_date}
                            onChange={e => this.setState({due_date: e.target.value})}/>
                    <div id="item_completed_prompt" class="item_prompt">Completed:</div>
                    <input id="item_completed_checkbox" class="item_input" type="checkbox" 
                            defaultValue={this.props.todoItem.completed}
                            onChange={e => this.setState({completed: e.target.checked})}/>
                </div>
                <br></br>
                <button id="item_form_submit_button" class="item_button"
                        onClick={() => this.handleSubmit()}>Submit</button>
                <button id="item_form_cancel_button" class="item_button"
                        onClick={() => this.props.loadList(this.props.todoList)}>Cancel</button>
            </div>
        )
    }
}

ItemScreen.propTypes = {
    currentScreen: PropTypes.string.isRequired,
    todoItem: PropTypes.object.isRequired
}

export default ItemScreen
