import React from 'react';
import './useroutput.css';

const Useroutput = (props) =>{
    return(
        <div className="box">
            <p>Hello Checking {props.name}</p>
        </div>
    );
}

export default Useroutput