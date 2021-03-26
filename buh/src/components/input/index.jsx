import React from 'react';

const index = (props) => {
    return (
        <input onChange={(event)=> props.setValue(event.target.value)}
        value={props.value}
        type={props.type}
        className={props.class}
        />

    );
}

export default index;
