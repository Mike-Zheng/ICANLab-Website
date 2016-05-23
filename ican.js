var express = require('express');
var app = express();

app.set('port', process.env.PORT || 9527);

var routes = require('./routes')(app);

app.use("/js", express.static(__dirname + '/js'));
app.use("/css", express.static(__dirname + '/css'));
app.use("/fonts", express.static(__dirname + '/fonts'));
app.use("/image", express.static(__dirname + '/image'));

app.listen(app.get('port'), startInit());


function startInit() {
    console.log("start server");
}
