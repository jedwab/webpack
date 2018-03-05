import React from 'react';

const TodoForm = props => (
	<label> Wpisz nazwę nowego zadania do wykonania: 
		<input
			onKeyUp={(e) => props.handleKeyUp(e)}
			placeholder= "Tu wpisz tekst!"
		/>
	</label>
);

export default TodoForm;
