require("../commons/_extend_");

function BaseUser(){
	this.id = null;

	this.name = null;
	
	this.nick = null;
	
	this.type = null;
	
	//一个用户可以拥有多个权限
	this.roles = [];
	
	this.parentId = null;
}

BaseUser.prototype.TYPE = {1 : "admin", 2 : "manager"};

BaseUser.prototype.ROLES_TYPE = {1 : "All"};

BaseUser.prototype.setId = function(id){
	this.id = id;
};

BaseUser.prototype.getId = function(){
	return this.id;
};

BaseUser.prototype.setName = function(name){
	this.name = name;
};

BaseUser.prototype.getName = function(){
	return this.name;
}

BaseUser.prototype.setNick = function(nick){
	this.nick = nick;
}

BaseUser.prototype.getNick = function(){
	return this.nick;
}

BaseUser.prototype.toSuper = function(superClass){
	if(superClass.superObj === BaseUser){
		this.id = superClass.id;
		this.name = superClass.name;
		this.nick = superClass.nick;
		this.type = superClass.type;
		this.roles = superClass.roles;
		this.parentId = superClass.parentId;
		return this;
	}

	return null;
}

module.exports = BaseUser;