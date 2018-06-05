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
setInterval(function(){
	
	//io.to('11').emit('test','haha')
	
},1000)
module.exports = function(server,redis){
	io = socketio(server);
	io.on('connect',connect);
	
	/*var addedUser = false;
	socket.on('new message',function(data){
		socket.broadcast.emit('new message',{
			username : socket.username,
			message : data
		})
	}) 


	socket.on('add user',function(username){
		if(addedUser) return;
		socket.username = username;
		++numUsers;
		addedUser = true;
		socket.emit('login',{
			numUsers : numUsers
		})
		socket.broadcast.emit('user joined',{
			username : socket.username,
			numUsers :numUsers
		})
	})

	socket.on('typing',function(){
		socket.broadcast.emit('typing',{
			username : socket.username
		})
	})

	socket.on('stop typing',function(){
		socket.broadcast.emit('stop typing',{
			username : socket.username
		})
	})

	socket.on('disconnect',function(){
		if(addedUser){
			--numUsers;
		
			socket.broadcast.emit('user left',{
				username : socket.username,
				numUsers: numUsers
			})
		}
	})*/
	
}
