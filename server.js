const express = require('express');
const app = express();
const WebSocket = require('ws');
const MessagesController = require('./src/server/controllers/messages.controllers');

const PORT = process.env.PORT || 3030;
const webSocket = new WebSocket.Server({ port: PORT });

webSocket.on('connection', (wsObj) => {
    MessagesController.addClient(wsObj);

    wsObj.on('message', (data) => {
        MessagesController.sendMessage(wsObj, data);
    });
});
