import React from 'react'
import classes from './Cockpit.css'

const Maintemplate = (props) =>{

    const conditionalclass = [];
    let btnclass = ''

    if(props.listshow === true){
        btnclass = classes.red
    }

    if(props.personobj.length <= 2){
      conditionalclass.push(classes.red)
    }
    if(props.personobj.length <= 1){
      conditionalclass.push(classes.bold);
    }

    return(
        <div className={classes.Cockpit}>
            <h1 className={conditionalclass.join(' ')}>Hello World</h1>
            <button className={btnclass} onClick ={props.showlist}>Switch Name</button>
        </div>
    );
}

export default Maintemplate;