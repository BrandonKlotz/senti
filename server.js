var server = require('./tone.js');
var port = process.env.PORT || process.env.VCAP_APP_PORT || 5001;

server.listen(port, function() {
  console.log('Server running on port: %d', port);
});
