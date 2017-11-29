const express = require("express");
const app = express();
const errorCallback = console.error.bind(console);
const bodyParser = require('body-parser');

var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

require('dotenv').config();

app.use(bodyParser.json());
app.use(express.static('client/build'));

var tone_analyzer = new ToneAnalyzerV3({
  username: process.env.TONE_ANALYZER_USERNAME,
  password: process.env.TONE_ANALYZER_PASSWORD,
  version_date: '2017-11-28'
});

app.get('/api/tone', function(req, res) {
  var newText = req.query.text;
});

app.post('/api/tone/', function(req, res, next) {
  var text = req.body;
  var stringText = text.text;
  console.log(text);
  console.log(stringText);
  tone_analyzer.tone({text: stringText}, function(err, data) {
  // tone_analyzer.tone({text: "This is a pain in the butt! But I think that we'll get there in the end. "}, function(err, data) {
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
