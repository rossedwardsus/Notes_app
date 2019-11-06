import { ADD_ITEM, ADD_ITEM_CATEGORY, UPDATE_NOTE, ADD_NOTE_TAG } from "../types"


export const addItem = (description: any, category_name: any, date: any, amount: any) => {

  return (dispatch: any) => {

  //return (dispatch: redux.Dispatch<Any>) => {

    //addItemSuccess();
  
  //alert(title);
    dispatch({
      type: ADD_ITEM,
      description, 
      category_name,
      date, 
      amount
    })
  }
}

export const addItemCategory = (category_name: any) => {

  return (dispatch: any) => {

  //return (dispatch: redux.Dispatch<Any>) => {

    //addItemSuccess();
  
  //alert(title);
    dispatch({
      type: ADD_ITEM_CATEGORY,
      category_name
    })
  }
}

const addItemSuccess = (item: any) => ({
  type: ADD_ITEM,
  payload: {
    ...item
  }
});

