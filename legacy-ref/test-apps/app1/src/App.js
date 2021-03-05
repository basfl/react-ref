import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// const App = (props) => {
//   const [personState, setPersonState] = useState({
//     person: [
//       { name: "Max", age: 28 },
//       { name: "manu", age: 29 },
//       { name: "stephanie", age: 26 }
//     ],
//     message: "something"
//   })
//   const switchNameHandler = () => {
//     console.log("**************")
//     setPersonState({
//       person: [
//         { name: "babak", age: 35 },
//         { name: "amir", age: 31 },
//         { name: "parisa", age: 29 }
//       ]
//     })
//   }
//   return (
//     <div className="App">
//       <h1>Hi, I'm a React App</h1>
//       <p>This is really working!</p>
//       <button onClick={switchNameHandler}>Switch name</button>
//       <Person name={personState.person[0].name} age={personState.person[0].age} />
//       <Person name={personState.person[1].name} age={personState.person[1].age} >My Hobbies: Racing</Person>
//       <Person name={personState.person[2].name} age={personState.person[2].age} />
//     </div>
//   )
// }

class App extends Component {
  state = {
    person: [
      { name: "Max", age: 28 },
      { name: "manu", age: 29 },
      { name: "stephanie", age: 26 }
    ],
    message: "something"
  }
  switchNameHandler = (newName) => {
    console.log("**************")
    this.setState({
      person: [
        { name: "babak", age: 35 },
        { name: newName, age: 31 },
        { name: "parisa", age: 29 }
      ]
    })
  }
  onChangeNameHandler = (event) => {
    console.log("#####", event.target.value)
    this.setState({
      person: [
        { name: "babak", age: 35 },
        { name: event.target.value, age: 31 },
        { name: "parisa", age: 29 }
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler("amir!!!")}>Switch name</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age} />
        <Person
          name={this.state.person[1].name}
          age={this.state.person[1].age}
          myFunc={this.switchNameHandler.bind(this, "catdog!")}
          tochange={this.onChangeNameHandler} >
          My Hobbies: Racing
        </Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age} />
      </div>
    );

  }
}

export default App;

