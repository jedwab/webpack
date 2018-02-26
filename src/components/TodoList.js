import React from 'react';
import uuid from 'uuid';

const TodoList = props => {
	const table = props.qtydata.map((item) => <li>  <button onClick = {props.remove.bind(this, item.id)}> delete </button></li>);
	return(
		<div>
			<ul>
				{table}
			</ul>
		</div>
	);
};



export default TodoList;
