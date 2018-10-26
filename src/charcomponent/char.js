import React from 'react'

const char = (props) =>{
    const stylebox={
        display:'block',
        width:'250px',
        padding:'25px',
        margin:'15px auto 15px',
        background:'#ddd',
        cursor:'pointer'
    }
    return(
        <div onClick={props.click} style={stylebox} className="">
            {props.sepratechar}
        </div>
    )
}

export default char;