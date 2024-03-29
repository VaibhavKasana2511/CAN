import {apiClient} from './apiClient';

export const chatService = apiClient.injectEndpoints({
  endpoints: builder => ({
    roomID: builder.mutation({
      query: body => ({
        url: `/crete_chat/byinvestor`,
        body: body,
        method: 'POST',
      }),
    }),
  }),
});

export const {useRoomIDMutation} = chatService;
