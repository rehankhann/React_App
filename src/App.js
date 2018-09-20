import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {

  state = {
    Persons:[
      {name:'Muqeem' , age:26},
      {name:'Amico' , age:24},
      {name:'Humza' , age:25}
    ]
  }

  nameswitch = (Newname) =>{
    this.setState({
      Persons:[
        {name: Newname , age:25},
        {name: 'Shahbaaz' , age:22},
        {name: 'Mohd.Humza' , age:22}
      ]
    });
  }

  Namechangehandler = (event) =>{
    this.setState({
      Persons:[
        {name: event.target.value , age:25},
        {name: 'Shahbaaz' , age:22},
        {name: 'Mohd.Humza' , age:22}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <button onClick={() => this.nameswitch('maximillain')}>Switch Name</button>
          <Person name={this.state.Persons[0].name} age={this.state.Persons[0].age} Currntvalue={this.state.Persons[0].name} changed={this.Namechangehandler}/>
          <Person name={this.state.Persons[1].name} age={this.state.Persons[1].age} click={this.nameswitch.bind(this ,'Shahbaaz khan')}>He Loves Coding</Person>
          <Person name={this.state.Persons[2].name} age={this.state.Persons[2].age}/>
      </div>
    );
  }
}

export default App;
