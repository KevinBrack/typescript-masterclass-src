interface Person {
  name: string;
  age?: number;
}

type MyRequired<T> = {
  -readonly [P in keyof T]-?: T[P];
};

function printAge(person: MyRequired<Person>) {
  return `${person.name} is ${person.age}`;
}

// Created requirement
const person: MyRequired<Person> = {
  name: 'Todd',
  age: 27
};

// Built-in requirement
// const person: Required<Person> = {
//   name: 'Todd',
//   age: 27
// }

const age = printAge(person);
