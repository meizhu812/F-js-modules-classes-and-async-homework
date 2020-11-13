const URL = "https://v1.jinrishici.com/all.json";
const getPoetryPromise = async () => {
  return fetch(URL)
    .then((res) => res.json())
    .then((data) => [data.origin, data.author, data.content])
    .catch((reason) => new Error(reason));
};
const getPoetryAsync = async () => {
  try {
    const res = await fetch(URL);
    const data = await res.json();
    return [data.origin, data.author, data.content];
  } catch (e) {
    return e;
  }
};
export { getPoetryPromise, getPoetryAsync };
