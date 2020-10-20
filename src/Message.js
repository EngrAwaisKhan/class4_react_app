import React from 'react';

export function Message(props){
    return(
        <h1>Time: {props.timer ? 'morning':'night'}</h1>
    );
}