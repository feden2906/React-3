const saveUser = ({username, email}) => {
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST', //save info
        body: JSON.stringify({username, email}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}
export {saveUser};