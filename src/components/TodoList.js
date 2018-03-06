import React from 'react';
import uuid from 'uuid';

const TodoList = props => {
	const table = props.qtydata.map((item) => <li key={item.id}>{item.text} <button onClick={() => props.remove(item.id)}>x</button></li>);
	return(
		<div>
			<ul>
				{table}
			</ul>
		</div>
	);
};



export default TodoList;
