interface Person {
  name: string;
  age: number;
  address: {};
}

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// Created Pick
const person: MyPick<Person, 'name' | 'age'> = {
  name: 'Todd',
  age: 27
};

// Built-in Pick
// const person: Pick<Person, 'name' | 'age'> = {
//   name: 'Todd',
//   age: 27
// };
