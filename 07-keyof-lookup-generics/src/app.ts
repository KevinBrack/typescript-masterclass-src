const person = {
  name: 'Todd',
  age: 27
};

type Person = typeof person;
type PersonKeys = keyof Person; // "name" | "age"

type PersonTypes = Person[PersonKeys]; // string | number

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const personName = getProperty(person, 'age');

const anotherPerson: Person = {
  name: 'John',
  age: 30
};
