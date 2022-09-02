import { Component } from 'react';
import logo from "./logo.png";

export class GroceryList extends Component {
    state ={
        userInput: '',
        groceryList: []
        }
    
    onChangeEvent(e) {
    this.setState ({userInput: e});
    }

    addItem(input) {
    if (input === '') {
    alert ("Please enter an item ")}     
    else {
    let listArray = this.state.groceryList;
    listArray.push(input);
    this.setState({groceryList: listArray, userInput: ''})
    }
    }
    delitItem(){
    let listArray = this.state.groceryList;
    listArray=[];
    this.setState({groceryList: listArray})
    }

    crosseWord(event) {
    const li = event.target;
    li.classList.toggle('crossed');
    }

    onFormSubmit(e) {
    e.preventDefault();
    }

    render () {
        return (
            <div>
            <form onSubmit={this.onFormSubmit}>
            <div className="container">
            <input type="text" placeholder="What do you want to buy today?" onChange={(e)=>{this.onChangeEvent(e.target.value)} } value={this.state.userInput} />
            </div>
            <div className="container">
            <button onClick={()=> this.addItem(this.state.userInput)} className="add"> ADD</button>
            </div>
            <ul>
            {this.state.groceryList.map((item, index) => (
            <li onClickCapture={this.crosseWord} key={index}>
                <img src={logo} width="40px" alt="bag" />
                {item}
            </li>
            ))}
            </ul>
            <div className="container">
            <button onClick={()=> this.delitItem()} className="delete"> Delete</button>
            </div>
            </form>
            </div>
        )
    }
}