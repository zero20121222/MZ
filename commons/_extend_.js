_extend_ = function(subClass,superClass){
    var F = function(){};

    F.prototype = superClass.prototype;

    subClass.prototype = new F();

    //构造函数默认还是SubClass的
    subClass.prototype.constructor = subClass;

    //关联上级夫类对象
    subClass.prototype.superObj = superClass.prototype.constructor;
}

module.exports = _extend_;