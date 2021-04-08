import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import cardReducer from './Reducer/cardReducer';
import userFormReducer from './Reducer/formReducer';
export default combineReducers({ card: cardReducer, user: userFormReducer, form : formReducer });
