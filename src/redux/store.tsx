import {configureStore, combineReducers} from '@reduxjs/toolkit';
import moreReducer from '../features/more/reducer/more.reducer';
import onBoardingReducer from '../features/onBoarding/reducer/onBoarding.reducer';

export default configureStore({
  reducer: combineReducers({
    more: moreReducer,
    onBoarding: onBoardingReducer,
  }),
});
