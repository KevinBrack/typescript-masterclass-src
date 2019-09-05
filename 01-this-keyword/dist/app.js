function myFunction() {
    console.log('FUNCTION:::', this);
}
myFunction();
// Object literal
var myObj = {
    myMethod: function () {
        console.log('OBJECT:::', this);
    }
};
myObj.myMethod();
// Classes
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.myMethod = function () {
        console.log('CLASS:::', this);
    };
    return MyClass;
}());
var myInstance = new MyClass();
myInstance.myMethod();
