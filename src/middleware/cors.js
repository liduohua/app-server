module.exports = async function(ctx ,next){
	ctx.set('Access-Control-Allow-Origin','*');
	//ctx.body = {}
	await next();
}
