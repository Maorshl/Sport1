import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getCategories, search} from '../api/repo';

export const categoriesFetch = createAsyncThunk(
  'app/categoriesFetch',
  async () => {
    return await getCategories();
  },
);
export const searchFetch = createAsyncThunk(
  'app/searchFetch',
  async (searchText: string) => {
    return await search(searchText);
  },
);

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    searchResults: {},
    categories: [],
    status: 'waiting',
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(categoriesFetch.fulfilled, (state, action) => {
      state.categories = action.payload.categories;
      state.status = 'fulfilled';
    });
    builder.addCase(categoriesFetch.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(categoriesFetch.rejected, (state, action) => {
      state.status = 'Failed';
    });
    builder.addCase(searchFetch.fulfilled, (state, action) => {
      state.searchResults = action.payload.results;
      console.log(state.searchResults);
      state.status = 'fulfilled';
    });
    builder.addCase(searchFetch.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(searchFetch.rejected, (state, action) => {
      state.status = 'Failed';
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = appSlice.actions;

export default appSlice.reducer;

interface State {
  categories: [];
  status: string;
}
interface Payload {
  categories: [];
  [props: string]: any;
}
interface Action {
  payload: Payload;
  [props: string]: any;
}

// {
//   [thunk.pending]: (state: State) => {
//     state.status = 'loading';
//   },
//   [thunk.fulfilled]: (state: State, {payload}: Action) => {
//     state.categories = payload.categories;
//     state.status = 'fulfilled';
//   },
//   [thunk.rejected]: (state: State, {payload}: Action) => {
//     state.status = 'failed';
//   },
// },
