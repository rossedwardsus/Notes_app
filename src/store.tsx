import { createStore, applyMiddleware,  } from 'redux';
//import logger from 'redux-logger';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import reducers from './reducers/reducers';

export interface State {notes_reducer: {notes:[], tags: []}, budget_reducer: {items: [], tags: []}}

const store = createStore(
    reducers,
    //applyMiddleware(logger)
    applyMiddleware(thunk as ThunkMiddleware<any, any>)
);

export default store;