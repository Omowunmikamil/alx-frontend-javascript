export default function updateUniqueItems(arrMap) {
  if (!(arrMap instanceof Map)) throw new Error('Cannot process');
  for (const [key, value] of arrMap.entries()) {
    if (value === 1) {
      arrMap.set(key, 100);
    } else arrMap.set(key, value);
  }
  return arrMap;
}
