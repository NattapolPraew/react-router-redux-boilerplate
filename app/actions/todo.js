// import { INCREASE, DECREASE } from '../constants'

let nextTodoId = 0;

export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text: text,
    isComplete: true,
  }
}

export function removeTodo(index) {
  return {
    type: 'REMOVE_TODO',
    index: index
  }
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    id: id
  }
}