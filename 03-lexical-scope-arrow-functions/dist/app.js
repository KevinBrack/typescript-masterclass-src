var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.myMethod = function () {
        var _this = this;
        var foo = 123;
        console.log('1', this);
        setTimeout(function () {
            console.log('2', _this);
        }, 0);
    };
    return MyClass;
}());
var myInstance = new MyClass();
myInstance.myMethod();
