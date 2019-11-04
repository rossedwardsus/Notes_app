import { ADD_NOTE, UPDATE_NOTE, ADD_TAG } from './types'


export type NotesState = {
  notes: [any],
  tags: [any]
};

const initialState: Readonly<NotesState> = {
  notes: [{title: "an initial title", note: "an initial note"}], tags: ["move"]
}

function notes(state: NotesState = initialState, action: any) {
  //if (typeof state === 'undefined') {
  //  return initialState
  //}
  switch (action.type) {
    case ADD_NOTE:
      //alert("reducer")
      return Object.assign({}, state, {notes: [...state.notes, {title: action.title, note: action.note}]})

    case UPDATE_NOTE:
      //alert("update reducer")
      var temp_state = state;
      temp_state.notes[0]["title"] = action.title;
      temp_state.notes[0]["note"] = action.note;
      return Object.assign({}, state, {notes: [...state.notes]})


    case ADD_NOTE_TAG:
      //alert("reducer")
      return Object.assign({}, state, {notes: [...state.notes], tags:[...state.tags, action.tag]})



  // For now, don't handle any actions
  // and just return the state given to us.
    default:
      return state
  }
}

export default notes