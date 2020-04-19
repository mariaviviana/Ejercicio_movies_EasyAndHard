const http = require('http');
const {routers} = require('./router');

http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/json; charset=utf-8'});
	routers(req,res);

}).listen(3030, 'localhost', () => console.log('Server running in 3030 port'));
