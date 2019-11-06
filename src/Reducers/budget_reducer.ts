import { ADD_ITEM, ADD_ITEM_CATEGORY, UPDATE_NOTE, ADD_NOTE_TAG } from '../types'

export type BudgetState = {
  items: [{description: string, category_name: any, date: string, amount: string}],
  tags: [any]
  item_categories: [any]
};

const initialState: Readonly<BudgetState> = {
  items: [{description: "groceries", category_name: "cn", date: "date", amount: "20.00"}], tags: ["move"], item_categories: [{name: "groceries"}]
}

export type ADD_ITEM_TYPE = {type: string};

export interface AddItemAction { type: string, description: string, category_name: any, date: any, amount: string }

export type ItemAction = AddItemAction;

function budget(state: BudgetState = initialState, action: ItemAction) {
  //if (typeof state === 'undefined') {
  //  return initialState
  //}
  switch (action.type) {
    case ADD_ITEM:
    	//alert("reducer")
    	return Object.assign({}, state, {items: [...state.items, {description: action.description, category_name: action.category_name, date: action.date, amount: action.amount}]})

   case ADD_ITEM_CATEGORY:
      alert("reducer")
      return Object.assign({}, state, {items: [...state.items], item_categories: [...state.item_categories, {name: action.category_name}]})


   	//case ADD_TAG:
    	//alert("reducer")
    	//return Object.assign({}, state, {notes: [...state.notes], tags:[...state.tags, action.tag]})



  // For now, don't handle any actions
  // and just return the state given to us.
  	default:
      return state
  }
}

export default budget