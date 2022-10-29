export const userApi = () => {
  return fetch(`https://jsonplaceholder.typicode.com/users`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((e) => console.log(`error at get users ${e}`));
};
