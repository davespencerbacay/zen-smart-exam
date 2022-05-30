export const searchString = (value, search) => {
  return value
    .toString()
    .toLowerCase()
    .includes(search.toString().toLowerCase().trim());
};

export const getRandomInt = (max = 10000000) => {
  return Math.floor(Math.random() * max);
};
