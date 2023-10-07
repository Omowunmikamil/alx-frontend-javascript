export default function getListStudentIds(listArr) {
  if (Array.isArray(listArr)) {
      return list.map((val) => val.id);
    }
  return [];
}
