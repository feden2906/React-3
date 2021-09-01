let carsUrl = 'http://91.201.233.14/api/v1/cars';
// let url = carsUrl;

const getCars = () => {
    return fetch(carsUrl)
        .then(value => value.json());
};

const postCar = (car) => {
        fetch (carsUrl, {
        method: 'POST',
        body: JSON.stringify(car), //{model: 'name', year: number, price: number}
        headers: {
            'Content-type': 'application/json: charset=UTF-8',
        },
    })
        .then((response) => response.json());
};

export {getCars, postCar};