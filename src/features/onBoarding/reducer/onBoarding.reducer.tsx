import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {firstTimeCheck, finishOnBoarding} from '../action/onBoarding.action';

export const moreSlice = createSlice({
  name: 'more',
  initialState: {
    isFirstTime: false,
    loading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(firstTimeCheck.fulfilled, (state, action) => {
      state.isFirstTime = action.payload;
    });
    builder.addCase(firstTimeCheck.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(firstTimeCheck.rejected, (state, action) => {
      state.loading = false;
      console.error(action.error.message);
    });
    builder.addCase(finishOnBoarding.fulfilled, (state, action) => {
      state.isFirstTime = false;
    });
    builder.addCase(finishOnBoarding.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(finishOnBoarding.rejected, (state, action) => {
      state.loading = false;
      console.error(action.error.message);
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = moreSlice.actions;

export default moreSlice.reducer;
