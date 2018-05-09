//随机生成
const uuidv4 = require('uuid/v4');
var tokenRefreshTime = new Map();
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
	console.log(ctx.req.url);
	if(needAuthRoutes.indexOf(ctx.req.url.splice(1)) > -1){
		ctx.tokenId ;
		let expiredTime = 4320000;//3天
		let refreshTime = tokenRefreshTime.get(ctx.tokenId);
		if(Date.now() - refreshTime < expiredTime){
			tokenRefreshTime.set(ctx.tokenId, Date.now())
		}else{
			
		}
		//key = 'user:tokenId'
		//key = 'fund:tokenId'
		var val = await ctx.redis.get('user:tokenId');
		if(val){
			ctx.body = {
				error_no : '9999',
				error_info : '登录时间过期！'
			}
			return;
		}else{
			//刷新时间
		}
		await next();
	}else{
		await next();
	}
	
	
	
	
}
