import React, { Component } from 'react'
import PropTypes from 'prop-types';

//to do put recently accessed list on top

export class TodoListLink extends Component {
    render() {        
        return (
            <a 
                className='home_list_link'
                onClick={this.props.loadList.bind(this, this.props.todoList)}
            >
                {this.props.todoList.name}<br />
            </a>
        )
    }
}

TodoListLink.propTypes = {
    loadList: PropTypes.func.isRequired,
    todoList: PropTypes.object.isRequired
}

export default TodoListLink
