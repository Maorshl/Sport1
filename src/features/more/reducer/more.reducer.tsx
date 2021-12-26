import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
// import {getCategories, search} from '../../../api/repo';
import {categoriesFetch, searchFetch} from '../actions/more.action';

export const moreSlice = createSlice({
  name: 'more',
  initialState: {
    searchResults: {},
    moreActiveCategory: '',
    categories: [],
    loading: false,
    status: 'waiting',
  },
  reducers: {
    moreChangeActiveCategory: (state, action) => {
      if (action.payload === state.moreActiveCategory) {
        state.moreActiveCategory = '';
      } else {
        state.moreActiveCategory = action.payload;
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(categoriesFetch.fulfilled, (state, action) => {
      state.categories = action.payload.categories;
      state.loading = false;
    });
    builder.addCase(categoriesFetch.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(categoriesFetch.rejected, (state, action) => {
      state.status = 'Failed';
      state.loading = false;
    });
    builder.addCase(searchFetch.fulfilled, (state, action) => {
      state.searchResults = action.payload.results;
      state.loading = false;
    });
    builder.addCase(searchFetch.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(searchFetch.rejected, (state, action) => {
      state.status = 'Failed';
      state.loading = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const {moreChangeActiveCategory} = moreSlice.actions;

export default moreSlice.reducer;
