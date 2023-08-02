const genricFun = <T>(arg: T): T => arg;
console.log(genricFun('santosh'));
const isObj = <T>(arg: T): boolean => {
  return typeof arg === 'object' && !Array.isArray(arg) && arg !== null;
};
console.log(isObj(true));
console.log(isObj('John'));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: 'John' }));
console.log(isObj(null));

interface BoolCheck<T> {
  value: T;
  is: boolean;
}
const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false };
  }
  return { value: arg, is: !!arg };
};
console.log(checkBoolValue('israr'));
//class
class StateObject<T> {
  private data: T;
  constructor(value: T) {
    this.data = value;
  }
  get state(): T {
    return this.data;
  }
  set state(value: T) {
    this.data = value;
  }
}
const store = new StateObject('John');
console.log(store.state);
store.state = 'Dave';
console.log(store.state);
//store.state = 12;
const myState = new StateObject<(string | number | boolean)[]>([15]);
myState.state = ['Dave', 42, true];
console.log(myState.state);
