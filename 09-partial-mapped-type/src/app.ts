interface Person {
  name: string;
  age: number;
}

type MyPartial<T> = {
  [P in keyof T]?: T[P];
};

// Created Partial
function updatePerson(person: Person, prop: MyPartial<Person>) {
  return { ...person, ...prop };
}

// Built-in Partial
// function updatePerson(person: Person, prop: Partial<Person>) {
//   return { ...person, ...prop };
// }

const person: Person = {
  name: 'Todd',
  age: 27
};

updatePerson(person, { name: 'ABC' });
