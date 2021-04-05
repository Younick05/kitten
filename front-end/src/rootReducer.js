import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import cardReducer from './Reducer/cardReducer';
export default combineReducers({ card: cardReducer, form: formReducer });
