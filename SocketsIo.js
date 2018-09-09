'use strict';


module.exports = function SocketsIo(http, redisClient) {
    var redisChannel = process.env.REDISCHANNEL || 'car_status';
    var io = require('socket.io')(http);

    redisClient.subscribe(redisChannel);

    io.on('connection', function (socket) {
        console.log('=> Client has been connected');
        socket.on('disconnect', function () {
            console.log('=> Client disconnected');
        });
    });

    redisClient.on("message", function (channel, message) {
        console.log('=> recived redis channel message ' + message);
        io.sockets.emit('message', message)
    });
};

