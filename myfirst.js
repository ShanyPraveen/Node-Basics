var http = require('http')
var dt = require('./myfirstmodule')
var url = require('url')

const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World!!');
    res.write(req.url) //To get the url
    res.write('The date and time are currently: ' + dt.myDateTime()) //To write the Response
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month
    res.end() //To end the response
})

var port = 3000
server.listen(port)