const io = require('socket.io')();

io.on('connection', (socket) => {
    console.log(socket.id);
    socket.emit("socketId", socket.id);
});


io.listen(3001);