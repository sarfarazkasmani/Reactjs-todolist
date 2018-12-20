import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userInput: '',
      list: []
    }
    // this.removeTodo = this.removeTodo.bind(this)
  }

  updateValue(input) {
    this.setState({
      userInput: input
    });
  }

  addTodoList(e) {
    e.preventDefault();
    this.setState({
      list: [this.state.userInput, ...this.state.list],
      userInput: ''
    })
  }

  // removeTodo(index) {
  //   let list = this.state.list.slice();
  //   list.splice(index, 1);
  //   this.setState({
  //     list
  //   });
  // }

  render() {
    // if (this.state.userInput === '') {
    //   alert('Please enter task')
    // } else {
    //   this.setState({
    //     list
    // });
    // }

    return (
      <div className="App">
        <form onSubmit={(e) => this.addTodoList(e)}>
          <input
            onChange={(e) => this.updateValue(e.target.value)}
            value={this.state.userInput}
            type="text"
          />
          <button type="submit">Submit</button>
        </form>
        {/* <ul>
          {this.state.list.map((listItem, index) => <li key={index}>{listItem} <button onClick={() => { this.removeTodo(listItem, index)}}>Delete</button></li>)}
        </ul> */}
        {/* <ul>
          {this.state.list.map((listItem, index) => <li key={index}>{listItem} <button onClick={this.removeTodo}>Delete</button></li>)}
        </ul> */}
        <ul>
          {this.state.list.map((listItem, index) => <li key={index}>{listItem} </li>)}
        </ul>
      </div>
    );
  }
}

export default App;
