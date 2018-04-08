var config = {
	registryPort : 7001,
	webPort : 7002,
	database : {
		db : 'dxp',
		username : 'root',
		password : '123456',
		dialect : 'msyql',
		host : '111.231.249.225',
		port : 9000,
		pool : {
			maxConnections : 10,
			minConnections : 0,
			maxIdleTime : 30000
		},
		//storage :path.join(dataDir,'data.sqlite'),
		//logging : !!process.env.SQL.DEBUG
	}
}
module.exports = config;