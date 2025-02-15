import  { useState } from 'react';
import { Box, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useSocket } from '../../services/socket';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const socket = useSocket();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && socket) {
      socket.emit('message', {
        content: message,
        isUser: true,
        timestamp: new Date().toISOString(),
      });
      setMessage('');
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        p: 2,
        backgroundColor: 'background.paper',
        borderTop: 1,
        borderColor: 'divider',
      }}
    >
      <Box sx={{ display: 'flex', gap: 1 }}>
        <TextField
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          variant="outlined"
          size="small"
        />
        <IconButton type="submit" color="primary">
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default MessageInput;