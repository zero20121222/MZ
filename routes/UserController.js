var UserService = require("../services/UserService");
var BaseUser = require("../modules/BaseUser");
var express = require("express");
var router = express.Router();

var userService = new UserService();

router.get("/" , function(req , res){
	if(req.session.baseUser){
		
	}else{
		console.log("no login");
	}

	res.render("login" , { title: 'Express' });
});

router.post("/" , function(req , res){
	var name = req.param("username");
	var password = req.param("password");

	userService.login(name , password, function(result){
		if(result.isSuccess()){
			var user = result.getResult();
			if(user){
				//保存BaseUser对象数据
				req.session.baseUser = new BaseUser().toSuper(user);
			}
		}
		res.render("userInfo" , { title: 'Express' , result: result});
	});
});

module.exports = router;