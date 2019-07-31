import React from 'react';
import logo from './logo.svg';
// import './App.css';

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
    if(number>=0 & number<=100){
    localStorage.setItem(number.toString(),number);
    let {store} = number;
    }
    else{
      alert('Do not try negative integers and above 100 value')
    }
  }
  onReset =() =>{
    this.setState({number:0})
  }

  onEvent =(e) =>{
    let {name, value} = e.target;
    this.setState({
      [name] : value,
    })
  }
  render(){
  return (
    <div className="App">
      <header className="App-header" style={{marginLeft:'300px'}}>
        <h1>{this.state.number}%</h1>
        
        <button onClick={this.onAdd}>
          +
        </button>
        <button onClick={this.onSubmit}>Post</button>
        <p>
          
        </p>
        <input type='text' value={this.state.number} onChange={this.onEvent} name='number' style={{width:'60px',borderRadius:'5px'}}/><br/><br/>
        <button onClick={this.onSub}>
          -
        </button>
        <button onClick={this.onReset}>Reset</button>
      </header>
    </div>
  );
}
}
export default App;
