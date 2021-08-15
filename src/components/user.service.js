let usersArray = 'https://jsonplaceholder.typicode.com/users';

let getUsers = () => {
    return fetch(usersArray).then(value => value.json());
}

let getUser = (id) => {
    return fetch(usersArray + '/' + id).then(value => value.json());
}
export {getUser, getUsers};
