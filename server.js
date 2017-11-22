const express = require("express");
const app = express();
const errorCallback = console.error.bind(console);
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('client/build'));


var port = process.env.PORT || 5001;
// Start the server!
app.listen(port, function () {
  console.log('Express Server is running on ' + port);
});
