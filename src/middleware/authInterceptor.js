//随机生成
const uuidv4 = require('uuid/v4');
module.exports = async function(ctx, next){
	let needAuthRoutes = [
		'loopImgs',
		'siftMarketList',
		'getBannerImgs',
		'getTopNews',
		'getNewsList',
		'getNewsDetail',
		'400001',
		'400002',
		//个人中心
		'300003',
		'300012',
		'300013',
		//user
		'300001',
		'300002',
		'randomCode',
		'300005',
		'300004'
	];
	console.log(ctx.url);
	await next();
	
	
}
