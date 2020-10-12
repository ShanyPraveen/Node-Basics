var http = require('http')
var fs = require('fs')

// To Read file
// http.createServer(function (req, res) {
//     fs.readFile('demofile1.html', function(err, data) { 
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data);
//       return res.end();
//     });
// }).listen(3000);

// To Append file
// http.createServer(function (req, res) {
//   fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });
// }).listen(3000);

//To Open file
//   fs.open('mynewfile1.txt', 'w', function (err, file) {
//     if (err) throw err;
//     console.log('saved');
// });

//To Write file
// fs.writeFile('myfile.txt', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });


// To Delete file
// fs.unlink('mynewfile1.txt', function (err) {
//     if (err) throw err;
//     console.log('File deleted!');
// });

// To Rename file
// fs.rename('myrenamedfile.txt', 'myfile.txt', function (err) {
//     if (err) throw err;
//     console.log('File Renamed!');
// });