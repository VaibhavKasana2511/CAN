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
    fetchChatList: builder.query({
      query: id => ({
        url: `/get_chat_byroom_id?roomId=66147289f34e06d190b5cc03`,
        // url: `/get_chat_byroom_id/admin?roomId=66147289f34e06d190b5cc03`,
        method: 'GET',
      }),
    }),
  }),
});

export const {useRoomIDMutation, useLazyFetchChatListQuery} = chatService;
