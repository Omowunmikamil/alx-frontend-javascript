export default function getListStudentIds(listArr) {
  if (Array.isArray(listArr)) {
      return listArr.map((val) => val.id);
    }
  return [];
}
