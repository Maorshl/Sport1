import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {VodPageCategories} from '../action/vod.action';

export const moreSlice = createSlice({
  name: 'more',
  initialState: {
    categories: [],
    loading: false,
    status: 'waiting',
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(VodPageCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.loading = false;
    });
    builder.addCase(VodPageCategories.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(VodPageCategories.rejected, (state, action) => {
      state.status = 'Failed';
      state.loading = false;
      console.error(action.error.message);
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = moreSlice.actions;

export default moreSlice.reducer;
