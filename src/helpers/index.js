export const dataFetcher = async (URI) => {
  const response = await fetch(URI);
  const data = await response.json();
  return data;
};
