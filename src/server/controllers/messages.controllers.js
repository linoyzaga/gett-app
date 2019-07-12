const clients = require('../data/storage').clients;

module.exports.addClient = function addClient(client) {
    clients.push(client);
};

module.exports.sendMessage = function sendMessage(ws, data) {
    clients.forEach((client) => {
        if (client !== ws) {
            client.send(data);
        }
    });
};
