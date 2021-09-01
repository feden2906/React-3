let ApiService = 'http://91.201.233.14/';
let url = ApiService;

const getCars = () => {
    return fetch(url)
        .then(value => value.json());
};

const postCars = (car) => {
    return fetch( url , {
        method: 'POST',
        body: JSON.stringify(car),
        headers: {'Content-type': 'application/json: charset=UTF-8',}
    })
        .then(value => value.json());
};

export {getCars, postCars};