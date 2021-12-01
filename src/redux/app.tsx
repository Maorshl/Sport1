import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getCategories, search} from '../api/repo';

export const categoriesFetch = createAsyncThunk(
  'app/categoriesFetch',
  async (a: any = null, {rejectWithValue}) => {
    try {
      return await getCategories();
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  },
);
export const searchFetch = createAsyncThunk(
  'app/searchFetch',
  async (searchText: string, {rejectWithValue}) => {
    try {
      return await search(searchText);
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  },
);

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    searchResults: {},
    categories: [],
    loading: false,
    status: 'waiting',
  },
  reducers: {},
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
      console.error(action.error.message);
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
      console.error(action.error.message);
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = appSlice.actions;

export default appSlice.reducer;
