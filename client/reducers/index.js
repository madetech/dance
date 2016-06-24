
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import todos from './todos'
import dance from './dance'

export default combineReducers({
  routing,
  todos,
  dance
})
