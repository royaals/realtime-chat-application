module.exports = (strapi) => {
    const io = require('socket.io')(strapi.server, {
      cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
      }
    });
  
    io.on('connection', (socket) => {
      console.log('New client connected');
  
      socket.on('message', (data) => {
        // Echo the message back
        socket.emit('message', data);
      });
  
      socket.on('disconnect', () => {
        console.log('Client disconnected');
      });
    });
  };