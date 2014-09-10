/**
 * 用于封装response的返回数据信息对象
 * success:处理结果是否成功
 * error:错误数据信息
 * result:返回处理的结果数据
 */
var Response = function(){
	var pri = {
		success : false,
		error : null,
		result : null
	}

	var pub = {
		setSuccess : function(success){
			pri.success = success;
		},
		isSuccess : function(){
			return pri.success;
		},
		setError : function(error){
			pri.success = false;
			pri.error = error;
		},
		getError : function(){
			return pri.error;
		},
		setResult : function(result){
			pri.success = true;
			pri.result = result;
		},
		getResult : function(){
			return pri.result;
		},
		toData : function(){
			return pri;
		}
	}

	return pub;
}

module.exports = Response;