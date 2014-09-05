var env = require("../config/app");
var config = require("../config/"+env["env"]);

var mysql = require("mysql");
var PoolModule = require("generic-pool");

var connectParams = {
	'hostname' : config["mysql"]["host"],
	'port' : config["mysql"]["port"],
	'user' : config["mysql"]["user"],
	'password' : config["mysql"]["pwd"],
	'database' : config["mysql"]["db"]
}

var dbPool = PoolModule.Pool({
	name : "mysql",
	create : function(callback){
		var db = mysql.createConnection(connectParams);

		//设置变量转义处理
		// db.config.queryFormat = function (query, values) {  
		//   if (!values) return query;  
		//   return query.replace(/\:(\w+)/g, function (txt, key) {  
		//     if (values.hasOwnProperty(key)) {  
		//       return this.escape(values[key]);  
		//     }  
		//     return txt;  
		//   }.bind(this));  
		// };

		db.connect(function(error){
			callback(error , db);
		});
	},
	destroy : function(client){
		client.end();
	},
	max : config["mysql"]["poolMax"],
	idleTimeoutMillis : config["mysql"]["timeOut"],
	log : config["mysql"]["log"]
});

/**
 * 通过连接池技术实现访问mysql信息
 * @param dbDeal需要处理的mysql调用操作
 */
module.exports.deal = function(dbDeal){
	dbPool.acquire(function(error , client){
		if (error) {
			console.log("Failed to connect host:"+config["mysql"]["host"]);
			throw error;
		}
		dbDeal(client);
		//释放链接
		dbPool.release(client);
	});
}