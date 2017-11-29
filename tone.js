var http = require('http');
var bodyParser = require("body-parser");
var express = require('express');
var router = express();

require('dotenv').config();

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

router.post('/info', function(req, res) {
    var text = req.body.text;
    console.log(text);
    var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

    var tone_analyzer = new ToneAnalyzerV3({
      username: process.env.TONE_ANALYZER_USERNAME,
      password: process.env.TONE_ANALYZER_PASSWORD,
      version_date: '2017-11-28'
    });

    tone_analyzer.tone({
        text: text
    }, function(err, tone) {
    if (err) console.log(err);
    else res.send((JSON.stringify(tone, null, 2)));
    })
});

module.exports = router;
