import React from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'

import * as actions from '../actions/todo'
import Select2 from '../components/select2Wraper'




const Todo = ({ onClickRemove, onClickToggle, isComplete, text }) => (
	<li
		style={{
			textDecoration:
				isComplete?'none':'line-through'
		}}
	>
	{text}
	<button onClick={onClickToggle}>Toggle</button>
	<button onClick={onClickRemove}>Remove</button>
	</li>
);

let TodoList = ({todos = [], dispatch}) => (
	<ul>
		{todos.map((todo, index) => 
			<Todo
				key = {todo.id}
				{...todo}
				onClickToggle={() => dispatch(actions.toggleTodo(todo.id))}
				onClickRemove={() => dispatch(actions.removeTodo(index))}
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

let TodoApp = ({todos = []}) => (
	<div>
		<AddTodo />
		<TodoList />
      	<Select2 onChange={(e)=>{console.log(e.params);}}
      	option={{
      		placeholder:"test placeholder",
    		allowClear: true,
    		multiple: true,
    		data: todos
    	}}>
      	</Select2>
	</div>
);

TodoApp = connect(state => ({todos:state.todos}))(TodoApp);
export {TodoApp};
