var express = require('express');
var server = express();

var aobin={name:'aobin',age:10};

server.get('/',function (request, response) {
    response.send('hello');
});

server.get('/aobin',function (request, response) {
    response.send(aobin);
});

server.get('/aobin/:param',function (request, response) {
    response.send("your param issss : "+request.params.param);
});

server.use('/v', function (req, res) {

    //res.end('86');
    res.set('resultCode', '6001').set('data','haha')
        .status(400).json({msg: 'test'});
    return;

});

server.listen(3000);

