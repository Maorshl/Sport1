import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getCategories} from '../api/repo';

export const thunk = createAsyncThunk('app/thunk', async () => {
  return await getCategories();
});

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    categories: [],
    status: 'waiting',
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(thunk.fulfilled, (state, action) => {
      state.categories = action.payload.categories;
      state.status = 'fulfilled';
    });
    builder.addCase(thunk.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(thunk.rejected, (state, action) => {
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
