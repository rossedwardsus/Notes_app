import { ADD_ITEM, UPDATE_NOTE, ADD_TAG } from "./types"


export function addItem(description: any, date: any, amount: any) {

  //alert(title);

  return {
    type: ADD_ITEM,
    description, 
    date, 
    amount
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


export function addTag(tag: any) {

  //alert(title);

  return {
    type: ADD_TAG,
    tag  
  }
}