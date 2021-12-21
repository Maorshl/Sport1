import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getVodPage, getVideosByCategory} from '../../../api/repo';

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
export const VideosByCategory = createAsyncThunk(
  'app/VideosByCategory',
  async (id: string, {rejectWithValue}) => {
    try {
      return await getVideosByCategory(id);
    } catch (e: any) {
      return rejectWithValue(e);
    }
  },
);
