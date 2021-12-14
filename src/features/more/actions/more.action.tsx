import {getCategories, search} from '../../../api/repo';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

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
