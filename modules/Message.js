/**
 * 消息模型设置为使用redis保存最新的500条数据
 * 后续的数据信息保存到mysql中
 * 会定时获取数据保存到数据库当中
 */
var Message = function(){
	this.id = null;

	this.userId = null;

	this.content = null;

	this.type = null;

	this.createdAt = null;

	this.createdAt = null;
}

Message.prototype.Type = {1:"all" , 2:"team"};

//用户的最新消息的key
Message.prototype.newMsgKey = function(sendUserId){
	return "userId:" + sendUserId + ":msg_news";
};

//用户的所有消息的key
Message.prototype.allMsgKey = function(){
	return "userId:" + sendUserId + ":msg_all";
};

Message.prototype.toData = function(){
	return this;
};