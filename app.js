const http = require('http');
const Redis  = require('ioredis');
const socket = require('./src/socket');
const app = require('./src/index.js');
const config = require('./src/config');
const logger = require('./src/logs');
const redis = new Redis(config.redisPost,config.redisHost);
const subRedis = new Redis(config.redisPost,config.redisHost);
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
app.context.tokenRefreshTime = new Map();
app.context.redis = redis;
server.on('request',(request,response) => {
	//socket.io的请求不能被koa处理
	if(request.url.indexOf('socket.io') > -1){
		return;
	}
	app.callback()(request,response);
});
var count = 0;
 
redis.on('ready' ,()=>{
	console.log('redis server has connected');
	logger.error('redis server has connected');
	server.listen(config.webPort,()=>{
		console.log('Server listening at port %d',config.webPort);
	});
	
});
//订阅redis实例
subRedis.on('ready',()=>{
	//订阅'user:signout'
	subRedis.subscribe('user:signout',function(err,count){
		if(err){
			console.log('subscribing failed'); 
		}else{
			console.log('has subscribed "user:signout" channel.'); 
		}
	});
	subRedis.on('message',function(channel, message){
		console.log(channel+'   '+message);
	});
	socket(server, subRedis);
})

module.exports = server;


