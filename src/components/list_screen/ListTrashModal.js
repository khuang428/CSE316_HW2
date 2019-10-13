import React, { Component } from 'react'

export class ListTrashModal extends Component{
    render(){
        const visClassName = this.props.isVisible ? "modal is_visible": "modal is_not_visible";
        return (
            <div className = {visClassName} data-animation={this.props.isVisible ? "slideIn" : "slideOut"}>
                <div className ="modal_dialog" >
                    <header className ="dialog_header">
                        Delete list?
                    </header>
                    <section className ="dialog_content">
                        <p><strong>Are you sure you want to delete this list?</strong></p>
                    </section>
                        <button id="dialog_yes_button"
                                onClick ={() => this.props.deleteList()}>Yes</button>
                        <button id="dialog_no_button" 
                                onClick={() => this.props.hideModal()}>No</button>
                    <footer className ="dialog_footer">
                        The list will not be retreivable.
                    </footer>
                </div>
            </div>
        )
    }
}

export default ListTrashModal