var Message = require("../modules/Message");
var redisClient = require("../tools/redisPool");
var dbClient = require("../tools/dbPool");

var MessageDao = (function(){
	var insertSql = "insert into mz_messages(user_id, content, type, created_at, updated_at) values(? , ?, ?, now(), now())";

	function MessageDao(){};

	MessageDao.prototype.create = function(message , callBack){
		
	}
});