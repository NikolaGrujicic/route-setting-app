import { combineReducers } from 'redux';
import stuartReducer from './reducers/stuartReducer';

const rootReducer = combineReducers({ stuart: stuartReducer });

export default rootReducer;
