import React, { Component } from 'react';
//import './App.css';
import Persons from '../components/Persons/persons'
import styles from './app.module.css'
import Cockpit from '../components/cockpit/Cockpit'

class App extends Component {
  constructor(props) {
    super(props)
    console.log("**** constructor *****")
  }
  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }
  //////////////////////////////////////////////////////////////
  static getDerivedStateFromProps(props,state){
    console.log("getDerivedStateFromProps and props are", props)
    return state
  }
  // static getDerivedStateFromProps(props, state) {
  //   console.log("getDerivedStateFromProps and props are", props)
  //   return state
  //}
  ////////////////////////////////////////////////////
  componentDidMount() {
    console.log("*** componentDidMount ****")
  }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    // const style = {
    //   backgroundColor: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer'
    // };
    console.log("***** render")
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons persons={this.state.persons} personsClick={this.deletePersonHandler} personsChange={this.nameChangedHandler} />

        </div>
      );
    }

    return (
      <div className={styles.App}>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.showPersons}
          persons={this.state.persons}
          cockpitClicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
