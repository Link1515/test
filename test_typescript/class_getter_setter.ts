class Person {
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set name(val: string) {
    this._name = val;
  }
}

const per = new Person('Link', 23);
per.name = 'Link2';
console.log(per.name);
