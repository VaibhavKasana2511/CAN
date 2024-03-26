import {createSlice} from '@reduxjs/toolkit';

const forumSlice = createSlice({
  name: 'forum',
  initialState: {category: null, forumCategories: [], questionData: null},
  reducers: {
    fetchCategory: (state, action) => {
      state.category = action.payload;
    },
    fetchForumCategories: (state, action) => {
      state.forumCategories = action.payload;
    },
    fetchQuestionData: (state, action) => {
      state.questionData = action.payload;
    },
  },
});

export const {fetchCategory, fetchForumCategories, fetchQuestionData} =
  forumSlice.actions;

export default forumSlice.reducer;
