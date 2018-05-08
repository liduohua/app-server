class PersonCenterController {
	// 获取总资产
	async getAssetsInfo(ctx) {
		let totalAmount = 22222; // 总资产
		let usableAmount = 3333; // 可用资金   
		let canFetchAmount = 5454; // 可取 资金 
		ctx.body = {
			totalAmount : '3244232',
			usableAmount : '233323',
			canFetchAmount : '3324',
			error_no : 0
		}
	}
	// 获取当日成交
	async getDayTraded(ctx) {
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
	}
	// 获取当日委托
	async getDayEntrust(ctx){
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
	}
	// 获取历史成交
	async getHistoryTraded(ctx) {
		ctx.body = [{code : 'AW0001',
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

	}
}

module.exports = PersonCenterController;