import _ from "lodash";

export const paginate = (items = [], pageNumber = 1, pageSize = 1) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
};
