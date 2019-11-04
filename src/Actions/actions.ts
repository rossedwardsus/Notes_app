import { ADD_NOTE, UPDATE_NOTE, ADD_NOTE_TAG } from "./types"


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


export function addNoteTag(tag: any) {

  //alert(title);

  return {
    type: ADD_NOTE_TAG,
    tag  
  }
}