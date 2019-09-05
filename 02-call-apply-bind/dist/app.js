// Object literal
var myObj = {
    myMethod: function () {
        console.log('Object:::', this);
    }
};
// myObj.myMethod();
// Function
function myFunction() {
    var text = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        text[_i] = arguments[_i];
    }
    console.log('Function:::', this, text);
}
var bindFunction = myFunction.bind(myObj);
bindFunction('ABC', 'DEF');
bindFunction('123', '456');
bindFunction('ABC', 'DEF');
myFunction.call(myObj, 'ABC', 'DEF');
myFunction.apply(myObj, ['ABC', 'DEF']);
