import React, { Component } from 'react';
import Person from './components/Person/Person';
import AddPerson from './components/AddPerson/AddPerson';
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

  addPersonHandler = (event) => {
    event.preventDefault();
    let name = event.target.name.value,
        age = event.target.age.value,
        persons = [...this.state.persons];
    
    event.target.reset();

    persons.push({id: persons.length + 1, name: name, age: age});
    this.setState({persons: persons});
  }

  // addNewPerson
  // filter people by name  
  // Add header and have input to change header name
  
  // higher order components

  render() {
    const persons = this.state.persons.map(person => {
      return <li key={person.id}><Person id={person.id} clicked={this.removePersonHandler} name={person.name} age={person.age} /></li>
    });

    return (
      <div className="App">
        <ul>
          {persons}
        </ul>

        <AddPerson addPerson={this.addPersonHandler} />
      </div>
    );
  }
}

export default App;
