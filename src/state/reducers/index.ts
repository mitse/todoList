import { combineReducers } from 'redux'
import todos from './todos'
import modal from './modal'
import { dialogReducer } from "redux-dialog";

export default combineReducers({
  todos,
  modal
});