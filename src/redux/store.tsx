import {configureStore, combineReducers} from '@reduxjs/toolkit';
import moreReducer from '../features/more/reducer/more.reducer';

export default configureStore({
  reducer: combineReducers({
    more: moreReducer,
  }),
});
