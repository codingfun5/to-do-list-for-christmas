
import { Component } from 'react';
import check from './icons8-gift-64.png';
export class TodoList extends Component {
    state = {
        userInput: '',
        todoList: []
    }

onChangEvent(event){
    this.setState ({userInput: event});
}
addItem(input){
    if (input === '') {
        alert ("Please enter an item")
    }
    else {
let listArray = this.state.todoList;
listArray.push(input);
this.setState({todoList: listArray, userInput: ''})
    }
}
deleteItem(){
 let listArray = this.state.todoList;
 listArray = [];
 this.setState({todoList: listArray})
}
crossWord(event){
    const li = event.target;
    li.classList.toggle('crossed');
}
onFormSubmit(event){
    event.preventDefault();
}
render() {
    return (
        <form on onSubmit={this.onFormSubmit}>
            <div className='container'>
                <input type = "text"
                placeholder = "What do you wont to buy for Christmas?"
                onChange={(event) =>this.onChangEvent(event.target.value)}
                value={this.state.userInput}/>
            </div>
    <div className='container'>
                <button onClick={() =>this.addItem(this.state.userInput)}
                    className = "btn-add">Add</button>
            </div>
            <ul>
                {this.state.todoList.map((item, index) =>(
<li onClick={this.crossWord}key={index}>
    <img src={check} width = "30px" alt = "chick"/>
    {item}
</li>
                ))}
            </ul>
            <div className='container'>
                <button onClick={() => this.deleteItem()}
                className = "btn-delete">Delete</button>
            </div>
        </form>
    )
}
}