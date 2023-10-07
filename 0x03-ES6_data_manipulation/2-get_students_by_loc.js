export default function getStudentsByLocation(arr, city) {
  return arr.filter((val) => val.location === city);
}
