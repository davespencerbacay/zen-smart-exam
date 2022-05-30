export const searchString = (value, search) => {
  return value
    .toString()
    .toLowerCase()
    .includes(search.toString().toLowerCase().trim());
};
