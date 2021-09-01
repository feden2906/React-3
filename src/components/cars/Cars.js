import {useState, useEffect} from "react";
import {getCars} from "../../services/api.service";
import Car from "../car/Car";

export default function CarsForm () {
    let[model, setModel] = useState('model');
    let[year, setYear] = useState('year');
    let[price, setPrice] = useState('price');

    let[сar, setCar] = useState({model, year, price});

    const onSubmitForm = (e) => {
        e.preventDefault();
        let tempCar = {model, year, price};
        setCar({...tempCar});
        saveCar(tempCar);
    }
    let onInputChangeModel = (e) => {
        let model = e.target.value;
        setModel(model);
    };
    let onInputChangeYear = (e) => {
        let year = e.target.value;
        setYear(year);
    };
    let onInputChangePrice = (e) => {
        let price = e. target.value;
        setPrice(price);
    };

    return(
        <div>
            <form onSubmit={onSubmitForm}>
                <input type="text" name={'model'} value={model} onInput={onInputChangeModel}/>
                <input type="number" name={'year'} value={year} onInput={onInputChangeYear}/>
                <input type="number" name={'price'} value={price} onInput={onInputChangePrice}/>

                <input type="submit" value={'save'}/>
            </form>
        </div>
    );
};

export default function Cars() {
    let [cars, setCars] = useState([]);
    useEffect(() => {
        getCars().then(value => setCars(value));
    },[]);
    return(
        <div>
                {
                    cars.map(value => <Car key = {value.id} {...value}/>)
                }
        </div>
    );
}

