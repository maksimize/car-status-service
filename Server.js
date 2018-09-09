'use strict';
module.exports = function Server(redisClient) {

    var express = require('express')
        , app = express()
        , port = process.env.PORT || 3000
        , http = require('http').Server(app);

    var SocketsIo = require("./SocketsIo");
    new SocketsIo(http, redisClient);

    exports.server = http.listen(port);
};
