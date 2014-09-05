var env = require("../config/app");
var config = require("../config/"+env["env"]);

var redis = require("redis");
var PoolModule = require("generic-pool");

/**
 * 设置redis的连接池信息
 */
var dbPool = PoolModule.Pool({
	name : "redis",
	create : function(callback){
		var redisClient = redis.createClient(config["redis"]["port"] , config["redis"]["host"]);

		callback(null , redisClient);
	},
	destroy : function(client){
		client.end();
	},
	max : config["redis"]["poolMax"],
	idleTimeoutMillis : config["redis"]["timeOut"],
	log : config["redis"]["log"]
});

/**
 * 通过连接池技术实现访问redis信息
 * @param dbDeal需要处理的redis调用操作
 */
module.exports.deal = function(dbDeal){
	dbPool.acquire(function(error , client){
		if (error) {
			console.log("Failed to connect redis host:"+config["mysql"]["host"]+", port:"+config["mysql"]["port"]);
			throw error;
		}
		dbDeal(client);
		//释放链接
		dbPool.release(client);
	});
}