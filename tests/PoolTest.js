var dbClient = require("../tools/dbPool");

var redisClient = require("../tools/redisPool");

dbClient.deal(function(client){
	console.log("mysql test!");
	client.query('select * from snz_users;', function(err, rows, fields) {
	  if (err) throw err;
	  
	  rows.forEach(function(row) {
		console.log('The solution is: ', row);
	  });
	});
});

redisClient.deal(function(client){
	console.log("redis test!");
	client.get("requirementId:205:moduleNum" , function(err , reply){
		console.log("\n\nreplay:"+reply);
	});
});

var userFactory = require("../modules/User");
var user = userFactory.createUser();

user.setId(1);
user.setName("MichaelZhao");
user.setNick("MZ");
console.log(user.getId());
console.log(user.getName());
console.log(user.getNick());