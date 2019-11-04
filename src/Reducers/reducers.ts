import { combineReducers } from 'redux'
import budget_reducer from './budget_reducer'
import notes_reducer from './notes_reducer'

export default combineReducers({
  budget_reducer,
  notes_reducer
})