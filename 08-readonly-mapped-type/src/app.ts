interface Person {
  name: string;
  age: number;
}

interface ReadonlyPerson {
  readonly name: string;
  readonly age: number;
}

const person: ReadonlyPerson = {
  name: 'Kevin',
  age: 38
};

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

function freeze<T>(obj: T): MyReadonly<T> {
  return Object.freeze(obj);
}

const newPerson = freeze(person);
// newPerson.age = 100000; // Throws error
