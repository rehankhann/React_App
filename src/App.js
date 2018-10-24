import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'
import UserIn from './UserInput/UserInput.js'
import Userout from './Useroutput/Useroutput.js'

class App extends Component {

  state = {
    Persons:[
      {name:'Muqeem' , age:26},
      {name:'Amico' , age:24},
      {name:'Humza' , age:25}
    ],
    username:'Rehan khan',
    showpersons:false
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
      ],
      username: event.target.value
    });
  }

  Namechangehandler2 = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  togglepersons = () =>{
    const doesshow = this.state.showpersons;
    this.setState({
      showpersons: !doesshow
    });
  }

  deletethis = (getpersonindex) =>{
    const CurrentPersonList = this.state.Persons;
    CurrentPersonList.splice(getpersonindex, 1);
    this.setState({
      Persons:CurrentPersonList
    })
  }


  render() {
    const displaynone ={
      display:'none'
    }

    let persons = null ;

    if(this.state.showpersons){
      persons = (          
      <div className="">
        {
          this.state.Persons.map( (PersonDetails , PersonIndex) => {
            return <Person click={() => this.deletethis(PersonIndex)} name={PersonDetails.name} age={PersonDetails.age}></Person>
          })
        }
        <hr></hr>
        <hr></hr>

      </div>);
    }

    return (
      <div className="App">
        <h1>Hello World</h1>
          <button style={displaynone} onClick={() => this.nameswitch('maximillain')}>Switch Name</button>
          <button onClick ={this.togglepersons}>Switch Name</button>
          {persons}
          <hr></hr>
          <UserIn currentvalue={this.state.username} namechanged={this.Namechangehandler2}></UserIn>
          <Userout name={this.state.username}></Userout>
          <Userout name={this.state.username}></Userout>
          <Userout name={this.state.username}></Userout>
      </div>
    );
  }
}

export default App;
