import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import saveReducer from './reducer_save';
import fontReducer from './reducers';


const rootReducer = combineReducers({ fontReducer, saveReducer });

export const Store = createStore(rootReducer, applyMiddleware(thunk));