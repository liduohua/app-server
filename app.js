const http = require('http');
const Redis  = require('ioredis');
const socket = require('./src/socket');
const app = require('./src/index.js');
const config = require('./src/config');
const logger = require('./logs');
const redis = new Redis(config.redisPost,config.redisHost);
const server = http.createServer();

redis.on('error' ,(err)=>{
	logger.error('redis连接错误：'+err)
});
redis.on('close' ,()=>{
	logger.info('redis is closed.')
})
redis.on('reconnecting', ()=>{
	logger.info('redis is reconnecting');
})
redis.on('end' ,()=>{
	logger.info('redis is end');
})
// 启动消息推送
socket(server, redis);
app.context.redis = redis;
server.on('request',(request,response) => {
	//socket.io的请求不能被koa处理
	if(request.url.indexOf('socket.io') > -1){
		return;
	}
	app.callback()(request,response);
});
redis.on('ready' ,()=>{
	console.log('redis服务已连接');
	logger.error('redis服务已连接.');
	//订阅'user:signout'
	redis.sub('user:signout');
	
	server.listen(config.webPort,()=>{
		console.log('Server listening at port %d',config.webPort);
	});
});


module.exports = server;


