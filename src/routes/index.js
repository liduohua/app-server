const userActionsRouter = require('./userActions');
const a = require('./index1');
module.exports = async function(ctx, next){
	//ctx.throw(500, 'server internal error!');
	let app = ctx.app;
	app.use(a.routes());
	app.use(userActionsRouter.routes());
	next();
}
