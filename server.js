var express = require('express')
var app = express()


function sayHello(req, res) {
    res.send('hello world')
}

function addAplusB(req, res) {
    var a = req.params['a']
    var b = req.params['b']
    a = parseInt(a);
    b = parseInt(b);
    var c = a + b;
    res.send("Sum is: " + c)
};

/// var username = req.query['username']

app.get('/add/:a/:b', addAplusB);

app.get('/', sayHello);

app.listen(3000)
