const person = {
  name: 'Todd',
  age: 27
};

type Person = typeof person;

// JavaScript
// typeof person // 'object'

const anotherPerson: Person = {
  name: 'John',
  age: 30
};

const thirdPerson: typeof person = {
  name: 'Cindy',
  age: 50
};
