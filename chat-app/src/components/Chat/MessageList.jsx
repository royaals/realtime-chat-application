
import { Box, Typography, Paper } from '@mui/material';
import { useSelector } from 'react-redux';

const MessageList = () => {
  const messages = useSelector((state) => state.chat.messages);

  return (
    <Box sx={{ flexGrow: 1, overflow: 'auto', p: 2 }}>
      {messages.map((message, index) => (
        <Paper
          key={index}
          sx={{
            p: 2,
            mb: 2,
            backgroundColor: message.isUser ? '#e3f2fd' : '#f5f5f5',
            marginLeft: message.isUser ? 'auto' : 0,
            marginRight: message.isUser ? 0 : 'auto',
            maxWidth: '70%',
          }}
        >
          <Typography>{message.content}</Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default MessageList;