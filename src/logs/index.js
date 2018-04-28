const log4js = require('log4js')
/*
 * 
 */
log4js.configure({
	appenders : {
		//输出到文件
		file : {
			type : 'file',
			filename : 'logs/main.log',//输出日志的文件名
			maxLogSize : 20480,//日志文件的最大尺寸，如果不指定，则没有日志文件循环
			backups : 10,//日志文件保持循环的数量
		},
		//输出到控制台
		console : {
			type : 'stdout',
		}
	},
	categories: {
		development: {
			appenders: ['file', 'console'],
			level: 'all',
		},
		production: {
			appenders: ['file'],
			level: 'info',
			//pm2 : true //需要安装pm2-intercom
		},
		default: {
			appenders: ['file'],
			level: 'info',
		},
	},
})

const logger = 
	process.env.NODE_ENV === 'development'
		? log4js.getLogger('development')
		: log4js.getLogger('production')
		
module.exports = logger
