const app = require('./src/index.js');
const config = require('./src/config');
app.listen(config.webPort,()=>{
	console.log('Server listening at port %d',config.webPort);
});


