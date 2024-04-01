import {apiClient} from './apiClient';
import URL from '../../utils/services/endpoints';

export const authService = apiClient.injectEndpoints({
  endpoints: builder => ({
    userRegister: builder.mutation({
      query: formData => ({
        url: `/add_Investor`,
        body: formData,
        method: 'POST',
      }),
    }),
    userLogin: builder.mutation({
      query: body => ({
        url: `/investor_login`,
        body: body,
        method: 'POST',
      }),
    }),
    resetPassword: builder.mutation({
      query: body => ({
        url: `/resetlink_investor`,
        body: body,
        method: 'POST',
      }),
    }),
    fetchStates: builder.query({
      query: () => ({
        url: `/get_all_state`,
        method: 'GET',
      }),
    }),
    updateProfile: builder.mutation({
      query: body => ({
        url: `/update_Investor`,
        body: body,
        method: 'PUT',
      }),
    }),
    fetchMyProfile: builder.query({
      query: id => ({
        url: `/loggedin_user_dataByid?_id=${id}`,
        method: 'GET',
      }),
    }),
    updatePassword: builder.mutation({
      query: body => ({
        url: `/update-password/investor`,
        body: body,
        method: 'PUT',
      }),
    }),
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
    userPortfolio: builder.query({
      query: id => ({
        url: `/portfolio/list_by_mandate?user_registered_id=${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useUserRegisterMutation,
  useUserLoginMutation,
  useResetPasswordMutation,
  useLazyFetchStatesQuery,
  useUpdateProfileMutation,
  useLazyFetchMyProfileQuery,
  useUpdatePasswordMutation,
  useLazyFormCategoriesQuery,
  useLazyCategoryQuestionQuery,
  useAddQuestionMutation,
  useAddAnswerMutation,
  useLazyUserPortfolioQuery,
} = authService;
