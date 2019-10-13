import React, { Component } from 'react'
import ListTrashModal from './ListTrashModal'

export class ListTrash extends Component {
    state = {
        isVisible: false
    }
    showModal(){
        this.setState({isVisible: true});
    }
    hideModal(){
        this.setState({isVisible: false});
    }
    deleteList(){
        let listToDelete = this.props.todoList;
        this.props.todoLists.splice(listToDelete.key,1);
        for(let i = listToDelete.key;i < this.props.todoLists.length;i++){
            this.props.todoLists[i].key--;
        }
        this.props.goHome();
    }
    render() {
        return (
            <>
            <div id="list_trash" onClick={()=> this.showModal()}>&#128465;</div>
            <ListTrashModal isVisible = {this.state.isVisible} hideModal = {this.hideModal.bind(this)} deleteList = {this.deleteList.bind(this)}/>
            </>
        )
    }
}

export default ListTrash
