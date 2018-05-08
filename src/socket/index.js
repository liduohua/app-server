//直接推送行情列表数据
const socketio = require('socket.io');
const marketList = require('./marketList');
let numUsers = 0;
function connect(socket){
	numUsers++;
	console.log(numUsers);
	socket.emit('marketlist',marketList)
	socket.on('disconnect',disconnect);
}
function disconnect(){
	numUsers--;
	console.log('------------');
}
module.exports = function(server){
	var io = socketio(server);
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
