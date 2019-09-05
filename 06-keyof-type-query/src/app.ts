const person = {
  name: 'Todd',
  age: 27
};

type Person = typeof person;
type PersonKeys = keyof Person; // "name" | "age"

type PersonTypes = Person[PersonKeys]; // string | number

const anotherPerson: Person = {
  name: 'John',
  age: 30
};
