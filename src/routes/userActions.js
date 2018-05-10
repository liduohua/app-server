const Router = require('koa-router');
var router = new Router();
const UserController = require('../controllers/UserActionController');
let userController = new UserController();
/*
 * 用名密码登录
 */
router.post('/300001',async (ctx,next)=>{
	await userController.authenticateByUserName(ctx);
});
/*
 * 手机号登录
 */
router.post('/300002',async (ctx,next)=>{
	await userController.authenticateByPhone(ctx);
});
//获取验证码
router.post('/randomCode',async (ctx, next) => {
	await userController.getRandomCode(ctx);
});
//退出
router.post('/signout', async (ctx ,next) => {
	await userController.signOut(ctx);
});
router.get('/300005',(ctx, next) => {
	ctx.body = [
		{
			code : 'AW0001',
			name : '鸡油不分级A2中慧12',
			entrustDirection : '买入',
			holdAmount : 87,
			tradedAmount : 87,
			usableAmount : 87,
			holdCosting : 3400.00
		},
		{
			code : 'AW0001',
			name : '鸡油不分级A2中慧12',
			entrustDirection : '买入',
			holdAmount : 87,
			tradedAmount : 87,
			usableAmount : 87,
			holdCosting : 3400.00
		},
		{
			code : 'AW0001',
			name : '鸡油不分级A2中慧12',
			entrustDirection : '买入',
			holdAmount : 87,
			tradedAmount : 87,
			usableAmount : 87,
			holdCosting : 3400.00
		},
		{
			code : 'AW0001',
			name : '鸡油不分级A2中慧12',
			entrustDirection : '买入',
			holdAmount : 87,
			tradedAmount : 87,
			usableAmount : 87,
			holdCosting : 3400.00
		},
		{
			code : 'AW0001',
			name : '鸡油不分级A2中慧12',
			entrustDirection : '买入',
			holdAmount : 87,
			tradedAmount : 87,
			usableAmount : 87,
			holdCosting : 3400.00
		},
		{
			code : 'AW0001',
			name : '鸡油不分级A2中慧12',
			entrustDirection : '买入',
			holdAmount : 87,
			tradedAmount : 87,
			usableAmount : 87,
			holdCosting : 3400.00
		},
		{
			code : 'AW0001',
			name : '鸡油不分级A2中慧12',
			entrustDirection : '买入',
			holdAmount : 87,
			tradedAmount : 87,
			usableAmount : 87,
			holdCosting : 3400.00
		},
		
		{
			code : 'AW0001',
			name : '鸡油不分级A2中慧12',
			entrustDirection : '买入',
			holdAmount : 87,
			tradedAmount : 87,
			usableAmount : 87,
			holdCosting : 3400.00
		},{
			code : 'AW0001',
			name : '鸡油不分级A2中慧12',
			entrustDirection : '买入',
			holdAmount : 87,
			tradedAmount : 87,
			usableAmount : 87,
			holdCosting : 3400.00
		},
		
		{
			code : 'AW0001',
			name : '鸡油不分级A2中慧12',
			entrustDirection : '买入',
			holdAmount : 87,
			tradedAmount : 87,
			usableAmount : 87,
			holdCosting : 3400.00
		},
		{
			code : 'AW0001',
			name : '鸡油不分级A2中慧12',
			entrustDirection : '买入',
			holdAmount : 87,
			tradedAmount : 87,
			usableAmount : 87,
			holdCosting : 3400.00
		},
		{
			code : 'AW0001',
			name : '鸡油不分级A2中慧12',
			entrustDirection : '买入',
			holdAmount : 87,
			tradedAmount : 87,
			usableAmount : 87,
			holdCosting : 3400.00
		},
		{
			code : 'AW0001',
			name : '鸡油不分级A2中慧12',
			entrustDirection : '买入',
			holdAmount : 87,
			tradedAmount : 87,
			usableAmount : 87,
			holdCosting : 3400.00
		},
	];
});
router.get('/300004',(ctx, next) => {
	ctx.body = [
		{
			code : 'AW0001',
			name : '鸡油不分级A2中慧12',
			entrustTime : '2018-3-12 09:34:23',
			entrustDirection : '买入',
			dt : '订/转',
			entrustPrices : 150.77,
			entrustAmount : 12,
			tradedAmount : 0,
			entrustNo : '343243',
			status : '已报',
		},
		{
			code : 'AW0001',
			name : '鸡油不分级A2中慧12',
			entrustTime : '2018-3-12 09:34:23',
			entrustDirection : '买入',
			dt : '订/转',
			entrustPrices : 150.77,
			entrustAmount : 12,
			tradedAmount : 0,
			entrustNo : '343243',
			status : '已报',
		},
		{
			code : 'BN0014',
			name : '鸭肫M/A2六和12',
			entrustTime : '2018-3-12 09:34:23',
			entrustDirection : '买入',
			dt : '订/转',
			entrustPrices : 150.77,
			entrustAmount : 12,
			tradedAmount : 0,
			entrustNo : '343243',
			status : '已报',
		},
		{
			code : 'BN0014',
			name : '鸭肫M/A2六和12',
			entrustTime : '2018-3-12 09:34:23',
			entrustDirection : '买入',
			dt : '订/转',
			entrustPrices : 150.77,
			entrustAmount : 12,
			tradedAmount : 0,
			entrustNo : '343243',
			status : '已报',
		},
		{
			code : 'BN0014',
			name : '鸭肫M/A2六和12',
			entrustTime : '2018-3-12 09:34:23',
			entrustDirection : '买入',
			dt : '订/转',
			entrustPrices : 150.77,
			entrustAmount : 12,
			tradedAmount : 0,
			entrustNo : '343243',
			status : '已报',
		}
		,
		{
			code : 'BN0014',
			name : '鸭肫M/A2六和12',
			entrustTime : '2018-3-12 09:34:23',
			entrustDirection : '买入',
			dt : '订/转',
			entrustPrices : 150.77,
			entrustAmount : 12,
			tradedAmount : 0,
			entrustNo : '343243',
			status : '已报',
		},
		{
			code : 'BN0014',
			name : '鸭肫M/A2六和12',
			entrustTime : '2018-3-12 09:34:23',
			entrustDirection : '买入',
			dt : '订/转',
			entrustPrices : 150.77,
			entrustAmount : 12,
			tradedAmount : 0,
			entrustNo : '343243',
			status : '已报',
		},
		{
			code : 'AW0001',
			name : '鸡油不分级A2中慧12',
			entrustTime : '2018-3-12 09:34:23',
			entrustDirection : '买入',
			dt : '订/转',
			entrustPrices : 150.77,
			entrustAmount : 12,
			tradedAmount : 0,
			entrustNo : '343243',
			status : '已报',
		},
		{
			code : 'AW0001',
			name : '鸡油不分级A2中慧12',
			entrustTime : '2018-3-12 09:34:23',
			entrustDirection : '买入',
			dt : '订/转',
			entrustPrices : 150.77,
			entrustAmount : 12,
			tradedAmount : 0,
			entrustNo : '343243',
			status : '已报',
		},
		{
			code : 'BN0014',
			name : '鸭肫M/A2六和12',
			entrustTime : '2018-3-12 09:34:23',
			entrustDirection : '买入',
			dt : '订/转',
			entrustPrices : 150.77,
			entrustAmount : 12,
			tradedAmount : 0,
			entrustNo : '343243',
			status : '已报',
		},
		{
			code : 'BN0014',
			name : '鸭肫M/A2六和12',
			entrustTime : '2018-3-12 09:34:23',
			entrustDirection : '买入',
			dt : '订/转',
			entrustPrices : 150.77,
			entrustAmount : 12,
			tradedAmount : 0,
			entrustNo : '343243',
			status : '已报',
		},
		{
			code : 'BN0014',
			name : '鸭肫M/A2六和12',
			entrustTime : '2018-3-12 09:34:23',
			entrustDirection : '买入',
			dt : '订/转',
			entrustPrices : 150.77,
			entrustAmount : 12,
			tradedAmount : 0,
			entrustNo : '343243',
			status : '已报',
		}
		,
		{
			code : 'BN0014',
			name : '鸭肫M/A2六和12',
			entrustTime : '2018-3-12 09:34:23',
			entrustDirection : '买入',
			dt : '订/转',
			entrustPrices : 150.77,
			entrustAmount : 12,
			tradedAmount : 0,
			entrustNo : '343243',
			status : '已报',
		},
		{
			code : 'BN0014',
			name : '鸭肫M/A2六和12',
			entrustTime : '2018-3-12 09:34:23',
			entrustDirection : '买入',
			dt : '订/转',
			entrustPrices : 150.77,
			entrustAmount : 12,
			tradedAmount : 0,
			entrustNo : '343243',
			status : '已报',
		}
	]
});
module.exports = router;