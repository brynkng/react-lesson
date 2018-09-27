import React, { Component } from 'react';
import Person from './components/Person/Person';
import './App.css';

//Stateful component
class App extends Component {
  state = {
    foo: 'bar',
    persons: [
      {id: 1, name: 'Bryan', age: 30},
      {id: 2, name: 'Joe', age: 33},
      {id: 3, name: 'Susie', age: 37},
    ]
  }

  removePersonHandler = (personId) => {
    let persons = [...this.state.persons];
    persons = persons.filter(p => p.id !== personId)
    this.setState({persons: persons})
  }

  // addNewPerson

  // Add header and have input to change header name

  render() {
    const persons = this.state.persons.map(person => {
      return <li key={person.id}><Person id={person.id} clicked={this.removePersonHandler} name={person.name} age={person.age} /></li>
    });

    return (
      <div className="App">
        <ul>
          {persons}
        </ul>
      </div>
    );
  }
}

export default App;
