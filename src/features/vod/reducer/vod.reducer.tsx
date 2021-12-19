import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {VodPageCategories} from '../action/vod.action';

export const moreSlice = createSlice({
  name: 'more',
  initialState: {
    categories: [],
    activeCategory: {},
    videos: [],
    loading: false,
    status: 'waiting',
  },
  reducers: {
    changeActiveCategory: (state, action) => {
      const changeTo = state.categories.find(
        item => item.name === action.payload,
      );
      state.activeCategory = changeTo;
      state.videos = changeTo.videos;
    },
  },
  extraReducers: builder => {
    builder.addCase(VodPageCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.activeCategory = action.payload[0];
      state.videos = action.payload[0].videos;
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
export const {changeActiveCategory} = moreSlice.actions;

export default moreSlice.reducer;
