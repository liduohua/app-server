const Router = require('koa-router');
var router = new Router();

const NewsController = require('../controllers/NewsController');
let newsController = new NewsController();

/*
 * 获取头条新闻
 */
router.post('/getTopNews', async (ctx,next) => {
	await newsController.getTopNews(ctx);
});
/*
 * 获取新闻列表
 */
router.get('/getNewsList', async (ctx, next) => {
	await newsController.getNewsList(ctx);
});
/*
 * 获取新闻详情
 */
router.get('/getNewsDetail',async (ctx, next) => {
	await newsController.getNewsDetail(ctx);
});

module.exports = router;