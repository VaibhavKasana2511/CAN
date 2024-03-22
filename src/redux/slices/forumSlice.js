import {createSlice} from '@reduxjs/toolkit';

const forumSlice = createSlice({
  name: 'forum',
  initialState: {category: null, forumCategories: []},
  reducers: {
    fetchCategory: (state, action) => {
      state.category = action.payload;
    },
    fetchForumCategories: (state, action) => {
      state.forumCategories = action.payload;
    },
  },
});

export const {fetchCategory} = forumSlice.actions;

export default forumSlice.reducer;
