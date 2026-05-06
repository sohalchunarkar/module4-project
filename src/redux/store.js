import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import postReducer from './reducer';

const rootReducer = combineReducers({
  postData: postReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
