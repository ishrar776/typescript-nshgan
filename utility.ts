//// Partial
interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}
const detailsAssign: Assignment = {
  studentId: 'Umesh001',
  title: 'Assignment Details',
  grade: 657,
};
const updateAssignment = (
  assign: Assignment,
  updateData: Partial<Assignment>
): Assignment => {
  return { ...assign, ...updateData };
};
console.log(updateAssignment(detailsAssign, { grade: 478 }));
const exactValue: Assignment = updateAssignment(detailsAssign, { grade: 478 });
//Required
const updateAssignmentRequired = (assign: Required<Assignment>): Assignment => {
  return assign;
};
console.log(updateAssignmentRequired({ ...detailsAssign, verified: true }));
// if we do not provide second parameter then it will show error since it required all
//Readonly
const fixedAssesmentValue: Readonly<Assignment> = {
  ...exactValue,
  verified: true,
};
//Record
// Record
const hexColorMap: Record<string, string> = {
  red: 'FF0000',
  green: '00FF00',
  blue: '0000FF',
};
