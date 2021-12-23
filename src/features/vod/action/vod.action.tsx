import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {
  vodPageCategories,
  vodPageVideosByCategory,
} from '../../../api/repoControllers';

export const VodPageCategories = createAsyncThunk(
  'app/VodPage',
  async (a: any = null, {rejectWithValue}) => {
    try {
      return await vodPageCategories();
    } catch (e: any) {
      return rejectWithValue(e);
    }
  },
);
export const VideosByCategory = createAsyncThunk(
  'app/VideosByCategory',
  async (id: string, {rejectWithValue}) => {
    try {
      return await vodPageVideosByCategory(id);
    } catch (e: any) {
      return rejectWithValue(e);
    }
  },
);
