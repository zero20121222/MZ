var UserDao = require("../../daos/UserDao");
var User = require("../../modules/User");
var crypto = require("crypto");
var md5 = crypto.createHash("md5");

var user = new User();

user.setName("MichaelZhao");
user.setNick("MZ");
user.setPassword(crypto.createHash("md5").update("zero2012").digest("hex"));

console.log(crypto.createHash("md5").update("zero2012").digest("hex").length);

var userDao = new UserDao();
// userDao.create(user);
userDao.login(user.getNick() , crypto.createHash("md5").update("zero2012").digest("hex"));
userDao.update({"id":1, "nick":"MichaelZhao"});
userDao.findById(1 , function(user){
	console.log(user.getName());
});