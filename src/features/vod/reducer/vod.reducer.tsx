import {createSlice, current} from '@reduxjs/toolkit';
import {VodPageCategories, VideosByCategory} from '../action/vod.action';

export const moreSlice = createSlice({
  name: 'more',
  initialState: {
    categories: [],
    dropdownOpen: false,
    activeCategory: {},
    videos: [],
    activeVideo: {},
    loading: false,
    status: 'waiting',
    activeSubCategory: '',
  },
  reducers: {
    changeActiveCategory: (state, action) => {
      const changeTo = state.categories.find(
        item => item.name === action.payload,
      );
      state.activeCategory = changeTo;
      state.videos = changeTo.videos;
      state.dropdownOpen = false;
      state.activeVideo = changeTo.videos[0];
    },
    changeActiveVideo: (state, action) => {
      const changeTo = state.videos.find(item => item.id === action.payload);
      state.activeVideo = changeTo;
    },
    changeActiveSubCategory: (state, action) => {
      state.activeSubCategory = action.payload;
    },
    openDropdown: state => {
      state.dropdownOpen = !state.dropdownOpen;
    },
  },
  extraReducers: builder => {
    builder.addCase(VodPageCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.activeCategory = action.payload[0];
      state.videos = action.payload[0]?.videos;
      state.activeVideo = action.payload[0]?.videos[0];
      state.loading = false;
    });
    builder.addCase(VodPageCategories.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(VodPageCategories.rejected, (state, action) => {
      console.log(action.payload);
      state.loading = false;
      // console.error(action.error.message);
    });
    builder.addCase(VideosByCategory.fulfilled, (state, action) => {
      state.videos = action.payload;
      // state.loading = false;
    });
    builder.addCase(VideosByCategory.pending, (state, action) => {
      // state.loading = true;
    });
    builder.addCase(VideosByCategory.rejected, (state, action) => {
      // state.loading = false;
      // console.error(action.error.message);
    });
  },
});

// Action creators are generated for each case reducer function
export const {
  changeActiveCategory,
  changeActiveVideo,
  changeActiveSubCategory,
  openDropdown,
} = moreSlice.actions;

export default moreSlice.reducer;
