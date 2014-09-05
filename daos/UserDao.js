var dbClient = require("../tools/dbPool");
var userFactory = require("../modules/User");

UserDao = (function() {
	var findByIdSql = "select * from mz_users where id=?";
	var insertSql = "insert into mz_users(name, nick, password, created_at, updated_at) values(?, ?, ?, now(), now())";
	var updateSql = "update mz_users set ";
	var deleteSql = "delete from mz_users where id=?";
	var loginSql = "select * from mz_users where nick=? and password=?;";

	var UpdateSql = function(params , format){
		var updateSql = "update mz_users set ";
		updateSql += params["name"] ? "name="+format.escape(params["name"]) : "";
		updateSql += params["nick"] ? "nick="+format.escape(params["nick"]) : "";
		updateSql += params["password"] ? "password="+format.escape(params["password"]) : "";
		updateSql += " where id="+format.escape(params["id"]);

		return updateSql;
	}

	var installModule = function(data){
		var user = userFactory.createUser();
		user.setId(data["id"]);
		user.setName(data["name"]);
		user.setNick(data["nick"]);
		user.setPassword(data["password"]);
		user.setCreatedAt(data["created_at"]);
		user.setUpdatedAt(data["updated_at"]);

		return user;
	}

	function UserDao() {}
	
	/**
	 * 创建用户信息
	 * @param user 用户信息
	 */
	UserDao.prototype.create = function(user , callBack){
		dbClient.deal(function(client){
			client.query(insertSql , [user.getName(), user.getNick(), user.getPassword()], function(err, result){
				if (err) throw err;
				if (callBack) callBack(true);
			});
		});
	};

	UserDao.prototype.update = function(params , callBack){
		dbClient.deal(function(client){
			var query = client.query(UpdateSql(params , client) , null, function(err , result){
				if (err) throw err;
				if (callBack) callBack(true);
			});
		});
	};

	UserDao.prototype.findById = function(userId , callBack){
		dbClient.deal(function(client){
			client.query(findByIdSql, [userId], function(err , result){
				if (err) throw err;
				if (callBack) {
					result.forEach(function(row){
						callBack(installModule(row));
					})
				}
			});
		});
	};

	UserDao.prototype.login = function(nick , pwd, callBack){
		dbClient.deal(function(client){
			client.query(loginSql, [nick , pwd], function(err , result){
				if (err) throw err;
				console.log(result.length);
				if (callBack) {
					if(result.length == 0){
						callBack(null);
					}else{
						result.forEach(function(row){
							callBack(installModule(row));
						});
					}
				}
			});
		});
	};

	return UserDao;
})();

module.exports.createDao = UserDao;

