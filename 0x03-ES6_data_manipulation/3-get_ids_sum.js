export default function getStudentIdsSum(arr) {
  return arr.reduce((acc, c) => acc + c.id, 0);
}
