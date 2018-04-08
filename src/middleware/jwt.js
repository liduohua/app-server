const jsonwebtoken = require('jsonwebtoken');
module.exports = (opts = {}) => {
	const secret = opts.secret;
	const middleware = async function jwt(ctx, next){
		//if there's no secret set, toss it out right away;
		if(!secret) {
			ctx.throw(401, 'INVALID_SECRET');
		}
		const token = getJwtToken(ctx);
		
		try{
			//Try and decode the token asynchronously
			const decoded = await jsonwebtoken.verify(
				token,
				process.env.JWT_SECRET
			) 
			// if it worked set the ctx.state.user parameter to the decoded token;
			ctx.state.user = decoded.data;
		}catch(e){
			// if it's an expiration error , let's report that specifically.
			if(error.name === 'TokenExpiredError'){
				ctx.throw(401,'TOKEN_EXPIRED')
			}else{3
				ctx.throw(401,'AUTHENTICATION_ERROR')
			}
		}
		return next();
	}
 
	function getJwtToken(ctx){
		if(!ctx.header || !ctx.header.authorization){
			return;
		}
		const parts = ctx.header.authorization.split(' ');
		
		if(parts.length === 2){
			const scheme = parts[0]
			const credentials = parts[1];
			
			if(/^Bearer$/i.test(scheme)){
				return credentials
			}
		}
		return ctx.throw(401,'AUTHENTICATION_ERROR')
	}
	
	return middleware;
}
