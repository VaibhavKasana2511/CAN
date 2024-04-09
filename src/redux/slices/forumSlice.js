import {createSlice} from '@reduxjs/toolkit';

const forumSlice = createSlice({
  name: 'forum',
  initialState: {
    category: null,
    forumCategories: [],
    questionData: null,
    globalState: null,
  },
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
    changeGlobalState: (state, action) => {
      state.globalState = action.payload;
    },
  },
});

export const {
  fetchCategory,
  fetchForumCategories,
  fetchQuestionData,
  changeGlobalState,
} = forumSlice.actions;

export default forumSlice.reducer;
