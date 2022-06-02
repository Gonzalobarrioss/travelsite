import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import toggleReducer from './reducers/ToggleReducer';

const rootReducer = combineReducers({ 
    toggleReducer: toggleReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
