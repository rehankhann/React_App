import React, { Component } from 'react';
/*import Radium , {StyleRoot} from 'radium'*/
import './App.css';
import Person from './Person/Person.js'
import UserIn from './UserInput/UserInput.js'
import Userout from './Useroutput/Useroutput.js'
import Textfield from './UserInput/input.js'
import Charcterlength from './Useroutput/output.js'
import Char from './charcomponent/char.js'

class App extends Component {

  state = {
    Persons:[
      {id:'chechd' , name:'Muqeem' , age:26},
      {id:'asdasd' , name:'Amico' , age:24},
      {id:'sdasdd' , name:'Humza' , age:25}
    ],
    username:'Rehan khan',
    showpersons:false,
    length :0,
    txtvalue:[]
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

  /*Namechangehandler = (event) =>{
    this.setState({
      Persons:[
        {name: event.target.value , age:25},
        {name: 'Shahbaaz' , age:22},
        {name: 'Mohd.Humza' , age:22}
      ],
      username: event.target.value
    });
  }*/

  updatename = (event , id) => {
    const GetcurrentPerson = this.state.Persons.findIndex((currentid) =>{
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

  /* Assignment */

  getlength = (event) => {
    const currntvalue = event.target.value
    const getlength = currntvalue.length;
    const splitstring = currntvalue.split('');
    //console.log(splitstring); 
    this.setState({
      length:getlength,
      txtvalue : splitstring
    });
  }

  deletecharcter = (index) => {
    const Currentchar = this.state.txtvalue
    Currentchar.splice(index , 1);
    this.setState({
      txtvalue:Currentchar
    });
  }

  render() {
    const displaynone ={
      display:'none'
    }

    const togglebtn = {
      backgroundColor:'green',
      color:'white',
      padding:'8px 15px',
      border:'0'
    }

    const conditionalclass = [];
    if(this.state.Persons.length <= 2){
      conditionalclass.push('red')
    }
    if(this.state.Persons.length <= 1){
      conditionalclass.push('bold');
    }


    let persons = null ;

    if(this.state.showpersons){
      persons = (          
      <div className="">
        {
          this.state.Persons.map( (PersonDetails , PersonIndex) => {
            return <Person key={PersonDetails.id} changed={(event) => this.updatename(event , PersonDetails.id)} click={() => this.deletethis(PersonIndex)} name={PersonDetails.name} age={PersonDetails.age}></Person>
          })
        }
        <hr></hr>
        <hr></hr>

      </div>);
      togglebtn.backgroundColor = 'red';
    }

    let charctercount = 'Text long enough';

    if (this.state.length <= 5 ){
      charctercount = 'Text Too Short'
    }

    return (
      <div className="App">
        <h1 className={conditionalclass.join(' ')}>Hello World</h1>
          <button style={displaynone} onClick={() => this.nameswitch('maximillain')}>Switch Name</button>
          <button style={togglebtn} onClick ={this.togglepersons}>Switch Name</button>
          {persons}
          <hr></hr>
          <UserIn currentvalue={this.state.username}></UserIn>
          <Userout name={this.state.username}></Userout>
          <Userout name={this.state.username}></Userout>
          <Userout name={this.state.username}></Userout>
          <hr></hr>
          <hr></hr>
          <Textfield change={(event)=>this.getlength(event)}></Textfield>
          <Charcterlength length={this.state.length}></Charcterlength>
          {charctercount}
          {
            this.state.txtvalue.map((char , indexchar) => {
              return <Char key={indexchar} click={() => this.deletecharcter(indexchar)} sepratechar={char}></Char>
            })
          }
      </div>
    );
  }
}

export default App;
