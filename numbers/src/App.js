import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

 state={
   odd:false
 }
 onSelect=()=>{
   this.setSate({
     odd:true
   })
 }
  render() {
    const numbers=[1,2,3,4,5,6]
    numbers.forEach()
    return (
      <div className="App">
       <button onClick={this.onSelect}>numbers</button>
      </div>
    );
  }
}

export default App;
