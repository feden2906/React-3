let ApiService = 'http://91.201.233.14/api/v1/cars';
let url = ApiService;

const getCars = () => {
    return fetch(url)
        .then(value => value.json());
};

const postCars = (car) => {
    return fetch( url , {
        method: 'POST',
        body: JSON.stringify(car), //{model: 'name', year: number, price: number}
        headers: {'Content-type': 'application/json: charset=UTF-8',}
    })
        .then(value => value.json());
};

export {getCars, postCars};