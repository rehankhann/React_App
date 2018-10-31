import React, { Component } from 'react';
import classes from './App.css';
import Userlist from '../components/Personlist/personlist'
import Maintemplate from '../components/Cockpit/Cockpit'

class App extends Component {

  state = {
    Persons:[
      {id:'chechd' , name:'Muqeem' , age:26},
      {id:'asdasd' , name:'Amico' , age:24},
      {id:'sdasdd' , name:'Humza' , age:25}
    ],
    showpersons:false,
  }

  updatename = (event , id) => {
    const GetcurrentPerson = this.state.Persons.findIndex((currentid) => {
      return currentid.id === id;
    });

    const updatepersonlist = {
      ...this.state.Persons[GetcurrentPerson]
    };

    updatepersonlist.name = event.target.value;

    const Oldlist = [...this.state.Persons];
    Oldlist[GetcurrentPerson] = updatepersonlist;

    this.setState({
      Persons:Oldlist
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

    let personscon = null;

    if(this.state.showpersons){
      personscon = (
        <Userlist personobject={this.state.Persons} ChangePersonName={this.updatename} DeletePerson={this.deletethis}></Userlist>          
      );
    }

    return (
      <div className={classes.App}>
        <Maintemplate listshow={this.state.showpersons} personobj={this.state.Persons} showlist={this.togglepersons}></Maintemplate>
        {personscon}  
      </div>
    );
  }
}

export default App;
