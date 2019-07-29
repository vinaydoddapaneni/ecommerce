import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      number:0,
    }
  }

  onAdd =() =>{
    this.setState({number : this.state.number+1})
  }
  onSub =() =>{
    this.setState({number : this.state.number-1})
  }
  onSubmit =() =>{
    let {number} = this.state;
    localStorage.setItem(number.toString(),number);
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {this.state.number}
        </p>
        <button onClick={this.onAdd}>
          +
        </button>
        <button onClick={this.onSub}>
          -
        </button>
        <button onClick={this.onSubmit}>Post</button>
      </header>
    </div>
  );
}
}
export default App;
