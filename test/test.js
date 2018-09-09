'use strict';

var expect = require('chai').expect
    , Server = require('../Server')
    , io = require('socket.io-client')
    , ioOptions = {
        transports: ['websocket']
        , forceNew: true
        , reconnection: false
    }
    , testMsg = 'HelloWorld'
    , receiver,
    redis = require("redis-mock"),
    redisClient = redis.createClient();


describe('Chat Events', function () {
    beforeEach(function (done) {
        new Server(redisClient);
        receiver = io('http://127.0.0.1:3000/', ioOptions);
        done()
    });
    afterEach(function (done) {
        receiver.disconnect();
        done()
    });

    describe('Message Events', function () {
        it('Clients should receive a message when the `message` event is emited.', function (done) {
            receiver.on('message', function (msg) {
                expect(msg).to.equal(testMsg);
                done()
            });
            receiver.on('connect', function (msg) {
                console.log('=> reciver pluged');
                redisClient.publish("car_status", testMsg);
            });
        })
    })
});
