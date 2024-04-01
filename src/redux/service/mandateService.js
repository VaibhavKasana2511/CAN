import {apiClient} from './apiClient';

export const mandateService = apiClient.injectEndpoints({
  endpoints: builder => ({
    mandateList: builder.mutation({
      query: body => ({
        url: `/mandate/list`,
        body: body,
        method: 'POST',
      }),
    }),
    getCalendarEvents: builder.mutation({
      query: body => ({
        url: `/getEventtillDate`,
        body: body,
        method: 'POST',
      }),
    }),
    fetchUpcomingEvents: builder.mutation({
      query: body => ({
        url: `/get_events`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useMandateListMutation,
  useGetCalendarEventsMutation,
  useLazyFetchUpcomingEventsQuery,
} = mandateService;
