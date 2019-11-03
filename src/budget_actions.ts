import { ADD_ITEM, UPDATE_NOTE, ADD_TAG } from "./types"


export const addItem = (description: any, date: any, amount: any) => {

  return (dispatch: any) => {

  //return (dispatch: redux.Dispatch<Any>) => {

    //addItemSuccess();
  
  //alert(title);
    dispatch({
      type: ADD_ITEM,
      description, 
      date, 
      amount
    })
  }
}

const addItemSuccess = (item: any) => ({
  type: ADD_ITEM,
  payload: {
    ...item
  }
});


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