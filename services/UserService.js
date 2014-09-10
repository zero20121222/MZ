var UserDao = require("../daos/UserDao");
var User = require("../modules/User");
var Response = require("../commons/Response");
var crypto = require("crypto");
var md5 = crypto.createHash("md5");

var encryptMd5 = function(data){
	return crypto.createHash("md5").update(data).digest("hex");
}

var UserService = (function() {
	var userDao = new UserDao();

	function UserService() {}

	/**
	 * 用户登入操作
	 * @param nick 用户名
	 * @param password 密码
	 * @return User
	 * 返回用户信息
	 */
	 UserService.prototype.login = function(nick , password, callBack){
 		var result = Response();

 		if(nick == null || nick == ""){
 			result.setError("user login need nick");
 			callBack(result);
 			return null;
 		}

 		if(password == null || password == ""){
 			result.setError("user login need password");
 			callBack(result);
 			return null;
 		}

 		try{
		 	userDao.login(nick , encryptMd5(password), function(user){
		 		result.setResult(user);
		 		callBack(result);
		 	});
 		}catch(error){
 			console.log("error:"+error);
 			result.setError("find user info failed.");
 			callBack(result);
 		}
	 };

	return UserService;
})();

module.exports = UserService;