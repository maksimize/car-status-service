'use strict';

var redisPort = process.env.REDISPORT || 6379
    , redisHost = process.env.REDISHOST || '127.0.0.1'
    , redis = require("redis")
    , redisClient = redis.createClient(redisPort, redisHost);

console.log("====Car Status Service App Start====");

var Server = require("./Server");
new Server(redisClient);
