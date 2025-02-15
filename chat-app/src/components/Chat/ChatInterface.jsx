import  { useEffect } from 'react';
import { Box } from '@mui/material';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { useSocket } from '../../services/socket';
import { useDispatch } from 'react-redux';
import { addMessage } from '../../store/slices/chatSlice';

const ChatInterface = () => {
  const socket = useSocket();
  const dispatch = useDispatch();

  useEffect(() => {
    if (socket) {
      socket.on('message', (message) => {
        dispatch(addMessage(message));
      });
    }
    return () => {
      if (socket) {
        socket.off('message');
      }
    };
  }, [socket, dispatch]);

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <MessageList />
      <MessageInput />
    </Box>
  );
};

export default ChatInterface;