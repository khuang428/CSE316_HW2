import React, { Component } from 'react'
import ListHeading from './ListHeading'
import ListItemsTable from './ListItemsTable'
import ListTrash from './ListTrash'
import listNameTransaction from '../../lib/jstps/listNameTransaction';
import listOwnerTransaction from '../../lib/jstps/listOwnerTransaction';

export class ListScreen extends Component {
    constructor(props){
        super(props);
        this.undoredo = this.undoredo.bind(this);
    }
    state={
        name: this.props.todoList.name,
        owner: this.props.todoList.owner
    }
    getListName() {
        if (this.props.todoList) {
            let name = this.props.todoList.name;
            return this.props.todoList.name;
        }
        else
            return "";
        
    }
    getListOwner() {
        if (this.props.todoList) {
            let owner = this.props.todoList.owner;
            return this.props.todoList.owner;
        }
    }
    setListName(e){
        this.props.tps.addTransaction(new listNameTransaction(this.props.todoList, e.target.value));
        this.setState({name: this.props.todoList.name});
    }
    setListOwner(e){
        this.props.tps.addTransaction(new listOwnerTransaction(this.props.todoList, e.target.value));
        this.setState({owner: this.props.todoList.owner});
    }

    undoredo(e){
        if(e.keyCode == 90 && e.ctrlKey){ //undo
            this.props.tps.undoTransaction();
            this.setState({name: this.props.todoList.name,
                           owner: this.props.todoList.owner});
            e.preventDefault();
        }else if(e.keyCode == 89 && e.ctrlKey){ //redo
            this.props.tps.doTransaction();
            this.setState({name: this.props.todoList.name,
                           owner: this.props.todoList.owner});              
            e.preventDefault();
        }
        
    }

    componentDidMount(){
        document.addEventListener("keydown", this.undoredo, false);
    }

    componentWillUnmount(){
        document.removeEventListener("keydown", this.undoredo, false);
    }
    
    render() {
        return (
            <div id="todo_list">
                <ListHeading goHome={this.props.goHome} />
                <ListTrash todoList={this.props.todoList} todoLists={this.props.todoLists} goHome={this.props.goHome}/>
                <div id="list_details_container">
                    <div id="list_details_name_container" className="text_toolbar">
                        <span id="list_name_prompt">Name:</span>
                        <input 
                            value={this.state.name} 
                            type="text" 
                            id="list_name_textfield"
                            onChange={e => this.setListName(e)} />
                    </div>
                    <div id="list_details_owner_container" className="text_toolbar">
                        <span id="list_owner_prompt">Owner:</span>
                        <input 
                            value={this.state.owner}
                            type="text" 
                            id="list_owner_textfield" 
                            onChange={e => this.setListOwner(e)}/>
                    </div>
                </div>
                <ListItemsTable todoList={this.props.todoList} loadItem={this.props.loadItem} loadList={this.props.loadList} tps={this.props.tps}/>
            </div>
        )
    }
}

export default ListScreen
