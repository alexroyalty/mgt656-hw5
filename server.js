var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656!');
});
app.get('/beautiful-locust', function(request, response){
    response.send('This is the special page for a beautiful locust');
});

app.listen(process.env.PORT || 4000);