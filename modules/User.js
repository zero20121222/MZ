User = function(){
	var pri = {
		id : null,
		name : null,
		nick : null,
		password : null,
		createdAt : null,
		updatedAt : null
	}

	var pub = {
		setId : function(id){
			pri.id = id;
		},
		getId : function(){
			return pri.id;
		},
		setName : function(name){
			pri.name = name;
		},
		getName : function(){
			return pri.name;
		},
		setNick : function(nick){
			pri.nick = nick;
		},
		getNick : function(){
			return pri.nick;
		},
		setPassword : function(password){
			pri.password = password;
		},
		getPassword : function(){
			return pri.password;
		},
		setCreatedAt : function(createdAt){
			pri.createdAt = createdAt;
		},
		getCreatedAt : function(){
			return pri.createdAt;
		},
		setUpdatedAt : function(updatedAt){
			pri.updatedAt = updatedAt;
		},
		getUpdatedAt : function(){
			return pri.updatedAt;
		}
	}

	return pub;
}

module.exports.createUser = User;