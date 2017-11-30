const express = require("express");
const app = express();
const errorCallback = console.error.bind(console);
const bodyParser = require('body-parser');
//  IBM BlueMix credentials
require('dotenv').config();

app.use(bodyParser.json());
app.use(express.static('client/build'));

//  Initializes instance of Bluemix using env login
var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
var tone_analyzer = new ToneAnalyzerV3({
  username: process.env.TONE_ANALYZER_USERNAME,
  password: process.env.TONE_ANALYZER_PASSWORD,
  version_date: '2017-11-28'
});

//  API POST utilizes tone analyzer methods to send data and receive JSON output
//  Concatenation of variable required due to limitations of tone argument type
//  Call tone analyzer method to analze data and return JSON output
app.post('/api/tone/', function(req, res, next) {
  var text = req.body;
  var stringText = '"' + text.text + '"';

  tone_analyzer.tone({text: stringText}, function(err, data) {
    if (err) {
      return next(err);
    }
    return res.json(data);
  });
});

var port = process.env.PORT || 5001;
app.listen(port, function () {
  console.log('Express Server is running on ' + port);
});
