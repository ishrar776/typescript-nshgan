interface TransactionObj {
  readonly [index: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}
const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
  Security: 25,
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
let prop: string = 'Security';
console.log(todaysTransactions[prop]);

const totalAmount = (traccation: TransactionObj): number => {
  let exatAmount = 0;
  for (const findTracation in traccation) {
    exatAmount += traccation[findTracation];
  }
  return exatAmount;
};
console.log(totalAmount(todaysTransactions));

//other example
interface Student {
  //[key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}
const student: Student = {
  name: 'Doug',
  GPA: 3.5,
  classes: [100, 200],
};
//console.log(student.test);
for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`);
}
Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student]);
});
const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'name');
