var express = require('express'),
  path = require('path'),
  lookup = require('./lookup.js'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser');

var routes = require('./routes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.render('index', {title: 'Jisho Quick-fire'});
});

app.get('/lookup/:phrase', function(req, res) {
    lookup(req.params.phrase, function(results) {
        res.send(JSON.stringify(results));
    });
});

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
    console.log('Jisho lookup server started');
});

module.exports = app;