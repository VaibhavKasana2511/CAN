import {apiClient} from './apiClient';
import URL from '../../utils/services/endpoints';

export const authService = apiClient.injectEndpoints({
  endpoints: builder => ({
    userRegister: builder.mutation({
      query: body => ({
        url: `/register`,
        body: body,
        method: 'POST',
      }),
    }),
    userLogin: builder.mutation({
      query: body => ({
        url: `/login`,
        body: body,
        method: 'POST',
      }),
    }),
    resetPassword: builder.mutation({
      query: body => ({
        url: `/resetlink`,
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
        url: `/update`,
        body: body,
        method: 'PUT',
      }),
    }),
    updatePassword: builder.mutation({
      query: body => ({
        url: `/update-password`,
        body: body,
        method: 'PUT',
      }),
    }),
    addReferral: builder.mutation({
      query: body => ({
        url: `/add/referral`,
        body: body,
        method: 'POST',
      }),
    }),
    referralList: builder.query({
      query: id => ({
        url: `referral/list_by_mandate?user_mandate=${id}`,
        method: 'GET',
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
  }),
});

export const {
  useUserRegisterMutation,
  useUserLoginMutation,
  useResetPasswordMutation,
  useLazyFetchStatesQuery,
  useUpdateProfileMutation,
  useUpdatePasswordMutation,
  useLazyReferralListQuery,
  useAddReferralMutation,
  useLazyFormCategoriesQuery,
  useLazyCategoryQuestionQuery,
  useAddQuestionMutation,
  useAddAnswerMutation,
} = authService;
