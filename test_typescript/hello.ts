console.log('hello TypeScript');

let a: number;

// a = 13;

function sum(a: number, b: number): number {
  return a + b;
}

const result = sum(123, 456);

let gender: 'male' | 'female';

gender = 'male';

let aa: string;

let bb: unknown;
bb = '123';

if (typeof bb === 'string') {
  aa = bb;
}

aa = bb as string;
aa = <string>bb;

let obj: { name: string; age?: number } = { name: 'sss' };

let fun: (a: number, b: number) => number;

fun = function (n1, n2) {
  return n1 + n2;
};

let obj2: { name: string; [propName: string]: any };
obj2 = { name: 'hihi', gender: 'male' };

let arr: string[];
arr = ['aaaa'];

let arr2: Array<string>;
arr2 = ['aaa'];

let arr3: [string, number];
arr3 = ['aaa', 123];

enum Gender {
  Male = 0,
  Female = 1
}

let i: { name: string; gender: Gender };
i = {
  name: 'aaa',
  gender: Gender.Male
};

const cc = 12;
