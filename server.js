const express = require("express");
const app = express();
const errorCallback = console.error.bind(console);
const bodyParser = require('body-parser');
var delay = require('express-delay');

// Delay all responses for 1 second
app.use(delay(1500));

//  IBM BlueMix credentials
// We have these .gitignored for security
// This requires the package that allows us to use .env
require('dotenv').config();

app.use(bodyParser.json());
app.use(express.static('client/build'));

//  Initializes instance of Bluemix using env login
const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
const tone_analyzer = new ToneAnalyzerV3({
  username: process.env.TONE_ANALYZER_USERNAME,
  password: process.env.TONE_ANALYZER_PASSWORD,
  version_date: '2017-11-28'
});

//  API POST utilizes tone analyzer methods to send data and receive JSON output
//  Concatenation of variable required due to limitations of tone argument type
//  Call tone analyzer method to analze data and return JSON output
app.post('/api/tone/', (req, res, next) => {
  const text = req.body;
  tone_analyzer.tone(text, (err, data) => {
    if (err) {
      return next(err);
    }
    // Returning JSON object
    return res.json(data);
  });
});

// Sets up our local environment to run our Express Server on Port 5001
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log('Express Server is running on ' + port);
});
