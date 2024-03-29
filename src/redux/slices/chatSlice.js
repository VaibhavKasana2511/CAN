import {createSlice} from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'chat',
  initialState: {roomId: ''},
  reducers: {
    fetchRoomId: (state, action) => {
      state.roomId = action.payload;
    },
  },
});

export const {fetchRoomId} = chatSlice.actions;

export default chatSlice.reducer;
