const baseURL = "http://localhost:3000";
const Path = {
    users: 'users',
    items: 'users/items',
    ageWithCount: 'users/age'
}

export const getUsers = () =>
  fetch([baseURL, Path.users].join('/')).then((res) => res.json());
export const getItems = () =>
  fetch([baseURL, Path.items].join('/')).then((res) => res.json());
  export const getAgeWithCount = (item) =>
  fetch([baseURL, Path.ageWithCount,item].join('/')).then((res) => res.json());

