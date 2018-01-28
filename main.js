var io = require('socket.io')();

io.on('connection', function(socket){
    console.log(socket.id);
    socket.emit("socketId", socket.id);
});


io.listen(3001);