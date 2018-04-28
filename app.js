const http = require('http');
const Redis  = require('ioredis');
const socket = require('./src/socket');
const app = require('./src/index.js');
const config = require('./src/config');
const redis = new Redis(config.redisPost,config.redisHost);
const server = http.createServer();
// 启动消息推送
socket(server, redis);
app.context.redis = redis;
server.on('request',app.callback());

app.listen(config.webPort,()=>{
	console.log('Server listening at port %d',config.webPort);
});

module.exports = server;