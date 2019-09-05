function myFunction() {
  console.log('FUNCTION:::', this);
}
myFunction();

// Object literal
const myObj = {
  myMethod() {
    console.log('OBJECT:::', this);
  }
};
myObj.myMethod();

// Classes
class MyClass {
  myMethod() {
    console.log('CLASS:::', this);
  }
}
const myInstance = new MyClass();
myInstance.myMethod();
