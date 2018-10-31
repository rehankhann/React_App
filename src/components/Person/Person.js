import React from 'react';
import classes from './Person.css'

const Person = (props) => {
    return(
        <div className={classes.CardFormatting}>
            <p onClick={props.click}>My Name is {props.name} and i am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" value={props.Currntvalue} onChange={props.changed}/>
        </div>
    );
}

export default Person; 