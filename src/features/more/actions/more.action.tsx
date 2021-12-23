import {morePageCategories, morePageSearch} from '../../../api/repoControllers';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const categoriesFetch = createAsyncThunk(
  'app/categoriesFetch',
  async (a: any = null, {rejectWithValue}) => {
    try {
      return await morePageCategories();
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  },
);

export const searchFetch = createAsyncThunk(
  'app/searchFetch',
  async (searchText: string, {rejectWithValue}) => {
    try {
      return await morePageSearch(searchText);
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  },
);
