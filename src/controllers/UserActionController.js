const uuidv4 = require('uuid/v4');
class UserController {
	async authenticateByUserName(ctx) {
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
	}
	async authenticateByPhone(ctx) {
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
	}
	
	async getRandomCode(ctx) {
		var tokenId = uuidv4();
		ctx.body = {
			tokenId ,
			src : 'http://232/sd.jpeg'
		}
	}
}

module.exports =  UserController;
