import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getVodPage} from '../../../api/repo';

export const VodPageCategories = createAsyncThunk(
  'app/VodPage',
  async (a: any = null, {rejectWithValue}) => {
    try {
      return await getVodPage();
    } catch (e: any) {
      return rejectWithValue(e);
    }
  },
);
