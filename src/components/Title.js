import React from 'react';

const Title = props => (
    <div>
        <h1>TO DO LIST</h1>
        <p>number of things to do: {props.qty}</p>
    </div>
) 

export default Title;