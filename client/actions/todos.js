
import { createAction } from 'redux-actions'

export const addTodo = createAction('add todo')
export const deleteTodo = createAction('delete todo')
export const editTodo = createAction('edit todo')
export const completeTodo = createAction('complete todo')
export const completeAll = createAction('complete all')
export const clearCompleted = createAction('clear complete')

export function loadTodos() {
  return (dispatch) => {
    setTimeout(() => dispatch(addTodo('Use Redux with thunk')), 1000)
  }
}
