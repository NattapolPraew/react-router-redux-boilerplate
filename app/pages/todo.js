import React from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'

import * as actions from '../actions/todo'




const Todo = ({ onClick, isComplete, text }) => (
	<li onClick={onClick}
		style={{
			textDecoration:
				isComplete?'none':'line-through'
		}}
	>
	{text}
	</li>
);

let TodoList = ({todos = [], dispatch}) => (
	<ul>
		{todos.map(todo => 
			<Todo
				key = {todo.id}
				{...todo}
				onClick={() => dispatch(actions.toggleTodo(todo.id))}
			/>
		)}

	</ul>
);
TodoList = connect(state => ({todos:state.todos}))(TodoList);

let AddTodo = ({dispatch}) => {
	let input;
	return (
		<div>
			<input ref={node => {input = node;}}/>
			<button onClick={() => {dispatch(actions.addTodo(input.value))}}>
			{'Add'}
			</button>
		</div>
	);
};
AddTodo = connect()(AddTodo);

export const TodoApp = () => (
	<div>
		<AddTodo />
		<TodoList />
	</div>
);

