import { ADD_NOTE, UPDATE_NOTE } from './types'

const initialState = {
  notes: [{title: "an initial title", note: "an initial note"}]
}

function notes(state = initialState, action: any) {
  //if (typeof state === 'undefined') {
  //  return initialState
  //}
  switch (action.type) {
    case ADD_NOTE:
    	alert("reducer")
    	return Object.assign({}, state, {notes: [...state.notes, {title: action.title, note: action.note}]})

   	case UPDATE_NOTE:
    	alert("update reducer")
    	var temp_state = state;
    	temp_state.notes[0]["title"] = action.title;
    	temp_state.notes[0]["note"] = action.note;
    	return Object.assign({}, state, {notes: [...state.notes]})


  // For now, don't handle any actions
  // and just return the state given to us.
  	default:
      return state
  }
}

export default notes