const express = require("express");
const app = express();
const errorCallback = console.error.bind(console);
const bodyParser = require("body-parser");
var delay = require("express-delay");

// Delay all responses for 1 second
app.use(delay(1500));

//  IBM BlueMix credentials
require("dotenv").config();

app.use(bodyParser.json());
app.use(express.static("client/build"));

//  Initializes instance of Bluemix using env login
const ToneAnalyzerV3 = require("watson-developer-cloud/tone-analyzer/v3");
const tone_analyzer = new ToneAnalyzerV3({
    username: process.env.TONE_ANALYZER_USERNAME,
    password: process.env.TONE_ANALYZER_PASSWORD,
    version_date: "2017-11-28"
});

//  API POST utilizes tone analyzer methods to send data and receive JSON output
//  Call tone analyzer method to analze data and return JSON output

app.post("/api/tone/", (request, response, next) => {
    const text = request.body;
    tone_analyzer.tone(text, (error, data) => {
        if (error) {
            return next(err);
        }
        return response.json(data);
    });
});

const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log("Express Server is running on " + port);
});
