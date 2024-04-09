import {apiClient} from './apiClient';

export const forumService = apiClient.injectEndpoints({
  endpoints: builder => ({
    formCategories: builder.query({
      query: () => ({
        url: `/get_all_forum_Category`,
        method: 'GET',
      }),
    }),
    categoryQuestion: builder.query({
      query: id => ({
        url: `/quetion_data_by_category?category_id=${id}`,
        method: 'GET',
      }),
    }),
    addQuestion: builder.mutation({
      query: body => ({
        url: `/add_quetion`,
        method: 'POST',
        body: body,
      }),
    }),
    addAnswer: builder.mutation({
      query: body => ({
        url: `/update_question_data`,
        method: 'PUT',
        body: body,
      }),
    }),
  }),
});

export const {
  useLazyFormCategoriesQuery,
  useLazyCategoryQuestionQuery,
  useAddQuestionMutation,
  useAddAnswerMutation,
} = forumService;
