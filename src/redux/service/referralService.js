import {apiClient} from './apiClient';

export const referralService = apiClient.injectEndpoints({
  endpoints: builder => ({
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

export const {useLazyReferralListQuery, useAddReferralMutation} =
  referralService;
