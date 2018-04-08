//https://github.com/mysqljs/mysql
const Koa = require('koa');
const socket = require('./socket');
const config = require('../src/config');
const send =  require('koa-send');
const bodyParser = require('koa-bodyparser');
const error = require('koa-json-error');
const cors = require('./middleware/cors');
const routes = require('./routes');
const {resolve} = require('path');
const redis  = require('ioredis');
const ratelimit = require('koa-ratelimit')
const logger = require('./logs');
var app = new Koa();

/*app.use(
	ratelimit({
		db: new redis(),
		duration: 60000,
		errorMessage: '222',
		id: ctx => ctx.ip,
		headers: {
			remaining: 'Rate-Limit-Remaining',
			reset: 'Rate-Limit-Reset',
	 		total: 'Rate-Limit-Total',
		},
		max: 100,
	})
)*/

// 记录成功处理的请求
app.use(async (ctx, next) => {
	try {
		await next();
		logger.info(
			`${ctx.method} ${ctx.url} 响应: ${ctx.response.status}`
		)
	}catch(error){
		
	}
})

// 错误处理
let errorOptions = {
	postFormat: (e, obj) => {
		logger.info(obj)
		if(process.env.NODE_ENV === 'production'){
			return obj
		}else{
			delete obj.stack
			delete obj.name 
			return obj
		}
	}
}
app.use(error(errorOptions))

// 返回响应时间
app.use(async function responseTime(ctx, next) {
	const t1 = Date.now();
	await next();
	const t2 = Date.now();
	ctx.set('X-Response-Time',Math.ceil(t2-t1)+'ms');
})
// 静态文件处理
app.use(async (ctx, next) => {
	if(ctx.path.indexOf('static') !== -1){
		await send(ctx,ctx.path,{root : resolve(__dirname,'../'),maxage : 50000});
	}else if(ctx.path.indexOf('client') !== -1){
		await send(ctx,ctx.path,{root : resolve(__dirname,'../'),maxage : 50000});
	}else{
		await next()
	}
});

// 跨域处理
app.use(cors);

// body解析
app.use(bodyParser({enableTypes : ['json']}));

// 路由处理
app.use(routes);


var server = require('http').createServer(app.callback());

// 启动消息推送
socket(server);

module.exports = server;



