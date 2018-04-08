const Router = require('koa-router');
var router = new Router();
/*
 * 用的名密码登录
 */
router.post('/300001',(ctx,next)=>{
	let userName = ctx.request.body.userName;
	let password = ctx.request.body.password;
	var userInfo;
	
	if(userName === 'qwer' && password === '123456'){
		userInfo = {
			userName : 'qwer',
			id : '123524342',
			datetime : new Date(),
			vip : 1,
			clientName : '',
			error_no : 0
		}
	}else{
		userInfo = {
			error_no : '1',
			error_info : '账号或密码错误'
		}
	}
	ctx.body = userInfo;
});
/*
 * 手机号登录
 */
router.post('/300002',(ctx,next)=>{
	let phoneNo = ctx.request.body.phoneNo;
	let phoneCheckCode = ctx.request.body.phoneCheckCode;
	var userInfo;
	
	if(phoneNo === '13071833256' && phoneCheckCode === '123456'){
		userInfo = {
			userName : 'qwer',
			id : '123524342',
			datetime : new Date(),
			vip : 1,
			clientName : '',
			error_no : 0
		}
	}else{
		userInfo = {
			error_no : '1',
			error_info : '手机校验码错误'
		}
	}
	ctx.body = userInfo;
});

router.post('/300003',(ctx, next) => {
	let totalAmount = 22222; // 总资产
	let usableAmount = 3333; // 可用资金   
	let canFetchAmount = 5454; // 可取 资金 
	ctx.body = {
		totalAmount : '3244232',
		usableAmount : '233323',
		canFetchAmount : '3324',
		error_no : 0
	}
});
// 当日成交
router.get('/300011',(ctx, next) => {
	ctx.body = [{
		code : 'AW0001',
		name : '鸡油不分级A2中慧12',
		tradedTime : '2018-3-12 09:34:23', 
		tradedDirection : '卖出', 
		dt : '订立', 
		tradedPrices : 34.23, 
		tradedAmount : 100, 
		serviceChange : 10, 
		entrustNo : '333234', 
		tradedNo : '343243'
	}];
});
// 当日委托
router.get('/300012',(ctx, next) => {
	ctx.body = [{
		code : 'AW0001',
		name : '鸡油不分级A2中慧12',
		entrustTime : '2018-3-12 09:34:23',
		entrustDirection : '卖出',
		dt : '订立',
		entrustPrices : 34.23,
		entrustAmount : 100,
		tradedAmount : 100,
		entrustNo : '333235',
		status : '已报'
	}];
});
// 历史成交
router.get('/300013',(ctx, next) => {
	ctx.body = [{code : 'AW0001',
		name : '鸡油不分级A2中慧12',
		tradedTime : '2018-3-12 09:34:23', 
		tradedDirection : '卖出', 
		dt : '订立', 
		tradedPrices : 34.23, 
		tradedAmount : 100, 
		serviceChange : 10, 
		entrustNo : '333234', 
		tradedNo : '343243'}];
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