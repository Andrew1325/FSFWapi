import { users } from './models/FetchUsers';

let getUsers;

const getty = () => {
  return users;
};

interface HasAll {
  allUsers?: { data };
}

const displayUsers = (arr) => {
  let strg = '';
  for (let i = 0; i < arr.length; i++) {
    strg = strg.concat(
      '<p>Id: ' +
        arr[i]._id +
        ', Name: ' +
        arr[i].username +
        ', Age: ' +
        arr[i].age +
        '</p>'
    );
  }
  return strg;
};

const havy = () => {
  getty().then((res: HasAll) => {
    getUsers = res.allUsers.data;
    let root = document.getElementById('root');
    root.innerHTML = `
      <div>
       ${displayUsers(getUsers)}
      </div>
    `;
  });
};

havy();
