//直接推送行情列表数据
const socketio = require('socket.io');
const Namespace = require('socket.io/lib/namespace');
const marketList = require('./marketList');
let io ;
let conns = 0;
function connect(socket){
	conns++;
	console.log("连接数："+conns);
	socket.emit('marketList',marketList)
	socket.on('subscrible',subscrible); //订阅
	socket.on('update',update); //更新订阅
	socket.on('cancelSubscrible',cancel); //取消订阅
	socket.on('disconnect',disconnect);
}
function update(newCodes,oldCodes,fn){
	newCodes = [].concat(newCodes);
	this.join(codes);
	oldCodes = [].concat(oldCodes);
	oldCodes.forEach((code)=>{
		this.leave(code);
	});
	
}
function cancel(codes,fn){
	codes = [].concat(codes);
	codes.forEach((code) => {
		this.leave(code);
	})
}
function subscrible(codes,fn){
	if(typeof codes === 'function'){
		fn = codes;
		return fn('订阅代码不能为空！');
	}
	codes = [].concat(codes);
	this.join(codes); 
	this.emit('test',12)
}
function disconnect(reason){
	conns--;
	console.log(reason);
	//此处应该更新redis
}

//如果行情服务器发布了行情列表更新
function marketListUpdate(channel,message){
	if(channel === 'market:listupdate'){
		//将行情列表更改已相应的代码为单位广播到相应的房间
		io.to('11').to('22').emit('test','haha');
		let marketList = JSON.parse(message);
		marketList.forEach((item) => {
			io.of('market')
		});
	}
}
module.exports = function(server,subRedis){
	io = socketio(server);
	io.of('market').on('connect',connect);
	//订阅'user:signout'
	subRedis.subscribe('market:listupdate',function(err,count){
		if(err){
			console.log('market:listupdate subscribing failed'); 
		}else{
			console.log('has subscribed "market:listupdate" channel.'); 
		}
	});
	subRedis.on('message',marketListUpdate);
	
	subRedis.hmset('socket:server:addr',{})
}



