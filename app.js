const http = require('http');
const Redis  = require('ioredis');
const socket = require('./src/socket');
const app = require('./src/index.js');
const config = require('./src/config');
const redis = new Redis(config.redisPost,config.redisHost);
const server = http.createServer();


redis.on('error' ,(err)=>{
	console.log('redis连接错误：'+err);
});
redis.on('close' ,()=>{
	console.log('close');
})
redis.on('reconnecting', ()=>{
	console.log('reconnecting');
})
redis.on('end' ,()=>{
	console.log('end');
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
	server.listen(config.webPort,()=>{
		console.log('Server listening at port %d',config.webPort);
	});
});


module.exports = server;


