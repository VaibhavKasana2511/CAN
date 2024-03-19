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
  }),
});

// export const {useUserRegisterMutation} = authService;

export const {
  useUserRegisterMutation,
  useUserLoginMutation,
  useLazyFetchStatesQuery,
} = authService;
