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
        // url: `/get_chat_byroom_id?roomId=${id}`,
        url: `/get_chat_byroom_id/admin?roomId=64b11985c17464d7248b9d0d`,
        method: 'GET',
      }),
    }),
  }),
});

export const {useRoomIDMutation, useLazyFetchChatListQuery} = chatService;
