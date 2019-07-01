import lodash from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startNumber = (pageNumber - 1) * pageSize;
  return lodash(items)
    .slice(startNumber)
    .take(pageSize)
    .value();
}
