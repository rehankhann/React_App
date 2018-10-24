import React from 'react';

const userinput = (props) => {
    const styleinout = {
        border:'2px solid red'
    }
    return(
        <div>
            <input style={styleinout} type="text" name="MK" value={props.currentvalue} onChange={props.namechanged}/>
        </div>
    );
}

export default userinput;