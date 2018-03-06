import React from 'react';

const TodoForm = props => (
	<label> What else do you want to achieve?
		<input
			onKeyUp={(e) => props.handleKeyUp(e)}
			placeholder= "What's next?"
		/>
	</label>
);

export default TodoForm;