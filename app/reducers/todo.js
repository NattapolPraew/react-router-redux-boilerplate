

const todo = (state = {} ,action) =>{
	switch(action.type){
		case 'ADD_TODO':
			return {id:action.id, text:action.text, isComplete:action.isComplete};
		case 'TOGGLE_TODO':
			if(state.id == action.id) return {...state, isComplete:!state.isComplete};
			return state;
		default: return state;	
	}

}

export const todos = (state = [] ,action) => {
	switch(action.type){
		case 'ADD_TODO': return [...state, todo( null, action)];
		case 'TOGGLE_TODO': return state.map(t => todo(t,action));
		case 'REMOVE_TODO': return [...state.slice(0, action.index),...state.slice(action.index + 1, state.length)];
		default: return state;
	}
}