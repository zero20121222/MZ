var BaseUser = require("./BaseUser");

var User = function(){
	BaseUser.apply(this , arguments);

	this.password = null;
	this.createdAt = null;
	this.updatedAt = null;
}

//继承BaseUser对象
_extend_(User , BaseUser);

User.prototype.setPassword = function(password){
	this.password = password;
}

User.prototype.getPassword = function(){
	return this.password;
}

User.prototype.setCreatedAt = function(createdAt){
	this.createdAt = createdAt;
}

User.prototype.getCreatedAt = function(){
	return this.createdAt;
}

User.prototype.setUpdatedAt = function(updatedAt){
	this.updatedAt = updatedAt;
}

User.prototype.getUpdatedAt = function(){
	return this.updatedAt;
}

User.prototype.toData = function(){
	return this;
}

module.exports = User;