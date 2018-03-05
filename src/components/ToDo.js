import React from 'react';

const ToDo = props => (
	<button onClick= {() => {alert(props.data);}}>Pokaż zadanie</button>
);

export default ToDo;