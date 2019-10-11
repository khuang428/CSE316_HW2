import React, { Component } from 'react'

const Modal = ({isVisible, hideModal, deleteList}) => {
    const visClassName = isVisible ? "modal is_visible": "modal is_not_visible";
    return (
        <div className = {visClassName} data-animation={isVisible ? "slideIn" : "slideOut"}>
            <div className ="modal_dialog" >
                <header className ="dialog_header">
                    Delete list?
                </header>
                <section className ="dialog_content">
                    <p><strong>Are you sure you want to delete this list?</strong></p>
                </section>
                    <button id="dialog_yes_button"
                            onClick ={() => deleteList()}>Yes</button>
                    <button id="dialog_no_button" 
                            onClick={() => hideModal()}>No</button>
                <footer className ="dialog_footer">
                    The list will not be retreivable.
                </footer>
            </div>
        </div>
    )
}

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
            <Modal isVisible = {this.state.isVisible} hideModal = {this.hideModal.bind(this)} deleteList = {this.deleteList.bind(this)}/>
            </>
        )
    }
}

export default ListTrash
