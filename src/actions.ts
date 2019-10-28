import { ADD_NOTE, UPDATE_NOTE } from "./types"


export function addNote(title: any, note: any) {

  //alert(title);

  return {
    type: ADD_NOTE,
    title, 
    note
  }
}


export function updateNote(title: any, note: any) {

  //alert(title);

  return {
    type: UPDATE_NOTE,
    title, 
    note
  }
}