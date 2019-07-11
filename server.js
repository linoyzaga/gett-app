var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const messagesRouter = require('./src/server/routes/messages.routes')

var PORT = process.env.PORT || 8080;
app.use(bodyParser.json());

app.use('/messages', messagesRouter);

app.listen(PORT, function() {
    console.log('Server running on ' + PORT);
});
