import thunk from 'redux-thunk';
import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {Reducer} from './reducer/Reducer';

const rootReducer = combineReducers({
  dataApi: Reducer,
  MembersApi: Reducer,
  AddressApi: Reducer,
});
const Store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
export default Store;
