// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
interface Dadcms {
  rollnumber?: string;
  mark?: number;
  result?: (boolean | number)[];
}
let showcms: Dadcms = {
  rollnumber: '1234567',
  mark: 2345678,
  result: [false, 123456],
};
//console.log(showcms.mark);
const greetingCMS = (cmsdata: Dadcms) => {
  return `Hellow ${cmsdata.rollnumber}`;
};
console.log(greetingCMS(showcms));
//enum
enum Grade {
  U = 4,
  D,
  E,
  P,
  O,
}
console.log(Grade.O); //8
//literal types
let name: 'Dave';
//name ='isarar'
let userName: 'Dave' | 'israr' | 'shaan';
userName = 'shaan';

// type Aliases
// type Aliases
type stringOrNumber = string | number;
type Dadcms1 = {
  rollnumber: stringOrNumber;
  mark: number;
  result: (boolean | number)[];
};
let showcms1: Dadcms1 = {
  rollnumber: '1234567',
  mark: 2345678,
  result: [true, 123456],
};
console.log(showcms1.mark);

//funtion chepter-4
//funtion with arrow funtion
const sum = (a: number, b: number): number => {
  return a + b;
};
console.log(sum(5, 6));
//funtion with normal funtion
let substrackFuc = function (a: number, b: number): number {
  return a - b;
};
console.log(substrackFuc(7, 3));
const showMsg = (msg: any): void => {
  console.log(msg);
};
console.log(showMsg('israrmastan'));
//type funtion
//type mathFunction = (a: number, b: number) => number;
interface mathFunction {
  (a: number, b: number): number;
}
let multiplyFun: mathFunction = function (c, d) {
  return c * d;
};
console.log(multiplyFun(6, 3));
//Rest parameter
const totalall = (...nums: number[]): number => {
  return nums.reduce((prev, cur) => prev + cur);
};
console.log(totalall(1, 2, 3, 6, 5));

//Assesertion chepter-5
type One = string;
type Two = string | number;
type Three = 'hello';

// convert to more or less specific
let a: One = 'hello';
let b = a as Two; // less specific
let c = a as Three; // more specific

let d = <One>'world';
let e = <string | number>'world';

const addOrConcat = (
  a: number,
  b: number,
  c: 'add' | 'concat'
): number | string => {
  if (c === 'add') return a + b;
  return '' + a + b;
};

let myVal: string = addOrConcat(2, 2, 'concat') as string;

// Be careful! TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(2, 2, 'concat') as number;

//10 as string
10 as unknown as string;

// The DOM
const img = document.querySelector('img')!;
const myImg = document.getElementById('#img') as HTMLImageElement;
const nextImg = <HTMLImageElement>document.getElementById('#img'); //react

//img.src;
//myImg.src;
