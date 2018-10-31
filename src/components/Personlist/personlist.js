import React from 'react'
import Person from '../Person/Person.js'

const Userlist = (props) => {

    return(
        <div className="">
            {
                props.personobject.map( (PersonDetails , PersonIndex) => {
                return <Person 
                key={PersonDetails.id} 
                changed={(event) => props.ChangePersonName(event , PersonDetails.id)} 
                click={() => props.DeletePerson(PersonIndex)} 
                name={PersonDetails.name} 
                age={PersonDetails.age}>
                </Person>
                }) 
            }
        </div>
    );
}

export default Userlist;