import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';

// starter config code

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      employees: [{ name: 'tom' }, { name: 'amith' }, { name: 'arnold' }],
      filteredEmployees: [],
      search: ''
    }
  }

  handletyping = (event) => {
    console.log("we are typing", event.target.value)

    var filtered = []

    for (let i = 0; i < this.state.employees.length; i++) {
      console.log('u start with a ?', this.state.employees[i])
      if (this.state.employees[i].name.substring(0, event.target.value.length) === event.target.value) {
        console.log('we found a match!!!!', this.state.employees[i])
        filtered.push(this.state.employees[i])
      }
    }

    console.log("new filrwe people", filtered)
    this.setState({ filteredEmployees: filtered })

  }



  render() {
    // third zone for u!! you can do any js code in here or console.log
    console.log('this is our state', this.state)

    var pplToDisplay = this.state.employees
    if (this.state.filteredEmployees.length > 0) {
      pplToDisplay = this.state.filteredEmployees
    }




    return (
      // html section
      < div className="App" >
        <h1> Employee Directory</h1>
        <p>Search:</p>
        <input onChange={this.handletyping}></input>

        {
          pplToDisplay.map(function (singleDude) {
            return (
              <h1> {singleDude.name}</h1>
            )
          })
        }
      </div >
    );
  }
}

export default App;
