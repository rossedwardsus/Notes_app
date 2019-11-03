import { ADD_ITEM, UPDATE_NOTE, ADD_TAG } from './types'

export type BudgetState = {
  items: [{description: string, date: string, amount: string}],
  tags: [any]
};

const initialState: Readonly<BudgetState> = {
  items: [{description: "groceries", date: "date", amount: "20.00"}], tags: ["move"]
}

export interface AddItemAction { type: string, description: string, date: any, amount: string }

export type ItemAction = AddItemAction;

function notes(state: BudgetState = initialState, action: ItemAction) {
  //if (typeof state === 'undefined') {
  //  return initialState
  //}
  switch (action.type) {
    case ADD_ITEM:
    	//alert("reducer")
    	return Object.assign({}, state, {items: [...state.items, {description: action.description, date: action.date, amount: action.amount}]})

   	case UPDATE_NOTE:
    	//alert("update reducer")
    	var temp_state = state;
    	temp_state.items[0]["description"] = action.description;
    	temp_state.items[0]["amount"] = action.amount;
    	return Object.assign({}, state, {items: [...state.items]})


   	//case ADD_TAG:
    	//alert("reducer")
    	//return Object.assign({}, state, {notes: [...state.notes], tags:[...state.tags, action.tag]})



  // For now, don't handle any actions
  // and just return the state given to us.
  	default:
      return state
  }
}

export default notes