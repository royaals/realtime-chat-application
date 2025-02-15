import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    messages: [],
    currentSession: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    setCurrentSession: (state, action) => {
      state.currentSession = action.payload;
    },
    clearMessages: (state) => {
      state.messages = [];
    },
  },
});

export const { addMessage, setCurrentSession, clearMessages } = chatSlice.actions;
export default chatSlice.reducer;