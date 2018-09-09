'use strict';

module.exports = function SocketsIo(http, redisClient) {

    var io = require('socket.io')(http);

    redisClient.subscribe("radio");

    io.on('connection', function (socket) {
        console.log('=> Client has been connected');

        redisClient.on("message", function (channel, message) {
            console.log('=> recived redis channel message');
            io.sockets.emit('message', message)
        });

        socket.on('disconnect', function () {
            console.log('=> Client disconnected');
        });
    });
};

