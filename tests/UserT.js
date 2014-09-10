require("../modules/User");

UserT = (function(){
	var user = new User();
	function UserT(){
	}

	UserT.prototype.init = function(){
		user.setName("Michael");
	}

	UserT.prototype.getName = function(){
		console.log("message");
	}
});

module.exports = UserT;