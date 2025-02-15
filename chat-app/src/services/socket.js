import { io } from 'socket.io-client';
import { useState, useEffect } from 'react';

const SOCKET_URL = 'http://localhost:1337';

export const useSocket = () => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const socketIo = io(SOCKET_URL, {
        auth: {
          token,
        },
      });

      setSocket(socketIo);

      return () => {
        socketIo.disconnect();
      };
    }
  }, []);

  return socket;
};