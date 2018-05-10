const Router = require('koa-router');
const marketList = require('../socket/marketList');
var router = new Router();
/*
 * 获取轮播图片
 */
router.post('/loopImgs',(ctx,next)=>{
	var loopImgList = [{imgUrl : 'static/loopImg/15202178414401.jpg'},
		{imgUrl : 'static/loopImg/15202177548201.png'}]
	//ctx.set('Content-Type','application/json')
	ctx.body = loopImgList;
});

/*
 * 获取广告图片
 */
router.get('/getBannerImgs',(ctx,next) => {
	let pageNum = ctx.query.pageNum;
	let pageSize = ctx.query.pageSize;
	let bannerImgList;
	if(pageNum == 1){
		bannerImgList = [
			{imgUrl : 'static/banner/1520217862577.jpg'},
			{imgUrl : 'static/banner/1520217876472.jpg'},
			{imgUrl : 'static/banner/1520217951926.jpg'}
		];			
	}else if(pageNum == 2){
		bannerImgList = [
			{imgUrl : 'static/banner/1520217964093.jpg'},
			{imgUrl : 'static/banner/1520218074940.jpg'},
			{imgUrl : 'static/banner/1520218086072.jpg'},
		];		
	}else{
		bannerImgList = [
			{imgUrl : 'static/banner/1520218116203.jpg'},
			{imgUrl : 'static/banner/1520218130256.jpg'}
		];		
	}
	
	ctx.body = bannerImgList;
});

router.options('*',(ctx,next) => {
	ctx.status = 200;
	ctx.set('Access-Control-Allow-Methods','POST');
	ctx.set('Access-Control-Allow-Origin','*');
	ctx.set('Access-Control-Allow-Headers','Content-Type');
});

module.exports = router;
