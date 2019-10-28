import { createSelector } from 'reselect'

const getNotes = (state: any, index: any) => {alert(index); return state.notes}


export const getNote = createSelector(
  [getNotes],
  (notes) => JSON.stringify(notes[0])
)