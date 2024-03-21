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
  }),
});

// export const {useUserRegisterMutation} = authService;

export const {
  useUserRegisterMutation,
  useUserLoginMutation,
  useLazyFetchStatesQuery,
  useUpdateProfileMutation,
  useUpdatePasswordMutation,
  useLazyReferralListQuery,
  useAddReferralMutation,
} = authService;
