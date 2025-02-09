import React, { Component } from 'react';
import testTodoListData from './TestTodoListData.json'
import HomeScreen from './components/home_screen/HomeScreen'
import ItemScreen from './components/item_screen/ItemScreen'
import ListScreen from './components/list_screen/ListScreen'
import jstps from './lib/jstps/jstps.js'

const AppScreen = {
  HOME_SCREEN: "HOME_SCREEN",
  LIST_SCREEN: "LIST_SCREEN",
  ITEM_SCREEN: "ITEM_SCREEN"
}

class App extends Component {
  state = {
    currentScreen: AppScreen.HOME_SCREEN,
    todoLists: testTodoListData.todoLists,
    currentList: null,
    currentItem: null,
    tps: new jstps()
  }

  goHome = () => {
    this.setState({currentScreen: AppScreen.HOME_SCREEN});
    this.setState({currentList: null});
    this.state.tps.clearAllTransactions();
  }

  loadList = (todoListToLoad) => {
    this.setState({currentScreen: AppScreen.LIST_SCREEN});
    this.setState({currentList: todoListToLoad},
                   function(){let i = this.state.todoLists.indexOf(todoListToLoad);
                              this.state.todoLists.splice(i,1);
                              this.state.todoLists.unshift(todoListToLoad)});
    console.log("currentList: " + this.state.currentList);
    console.log("currentScreen: " + this.state.currentScreen);
  }

  loadItem = (itemToLoad) => {
    this.setState({currentScreen: AppScreen.ITEM_SCREEN});
    this.setState({currentItem: itemToLoad});
  }

  render() {
    switch(this.state.currentScreen) {
      case AppScreen.HOME_SCREEN:
        return <HomeScreen 
          loadList={this.loadList.bind(this)} 
          todoLists={this.state.todoLists} 
          tps = {this.state.tps} />;
      case AppScreen.LIST_SCREEN:            
        return <ListScreen
          goHome={this.goHome.bind(this)}
          todoList={this.state.currentList} 
          loadItem={this.loadItem.bind(this)}
          loadList={this.loadList.bind(this)}
          todoLists={this.state.todoLists}
          tps = {this.state.tps} />;
      case AppScreen.ITEM_SCREEN:
        return <ItemScreen
          currentScreen={this.state.currentScreen} 
          loadList={this.loadList.bind(this)}
          todoList={this.state.currentList}
          todoItem={this.state.currentItem}
          tps = {this.state.tps} />;
      default:
        return <div>ERROR</div>;
    }
  }
}

export default App;