import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Max', age: '28' },
      { id: '2', name: 'Manu', age: '29' },
      { id: '3', name: 'Stephanie', age: '26' },
      { id: '4', name: 'RND' },
    ],
    showPersons: false
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons })
  }

  nameChangedHandler = (event, id) => {
    const personId = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    const person = {
      ...this.state.persons[personId],
    };
    person.name = event.target.value

    const persons = [...this.state.persons];
    persons[personId] = person;

    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })

  }

  render() {
    let style = {
      backgroundColor: 'white',
      color:'black',
      border: '2px solid black',
      font: 'inherit',
      padding: '8px',
      cursor: 'pointer',
      transition: 'all 0.5s'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return (
              <li>
                <Person
                  name={person.name}
                  age={person.age}
                  key={person.id}
                  click={() => this.deletePersonHandler(index)}
                  changed={(event) => this.nameChangedHandler(event, person.id)}
                />
              </li>
            )
          })}
        </div>
      )
      style = {
        ...style,
        color: 'white',
        backgroundColor: 'black'
      }
    }
    let localClasses = [];
    this.state.persons.length <= 1 ? localClasses.push(classes.bold):null;

    return (
      <div className={classes.App}>
        <h1 className="hero">React App</h1>
        <p className={localClasses}>
          Test
        </p>
        <button
          className={classes.boton}
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Data</button>
        {persons}
        </div>

    );
  }
}

export default App;