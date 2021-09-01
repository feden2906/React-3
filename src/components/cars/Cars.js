import {useState, useEffect} from "react";
import {getCars} from "../../services/api.service";
import Car from "../car/Car";

export default function Cars() {
    let[model, setModel] = useState('');
    let[year, setYear] = useState('');
    let[price, setPrice] = useState('');

    let[сar, setCar] = useState({model, year, price});

    const onSubmitForm = (e) => {
        e.preventDefault();
        let tempCar = {model, year, price};
        setCar({...tempCar});
        // saveCar(tempCar);
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
        let price = e.target.value;
        setPrice(price);
    };


    let [cars, setCars] = useState([]);
    useEffect(() => {
        getCars().then(value => setCars(value));
    },[]);


    return(
        <div>
            <form onSubmit={onSubmitForm}>
                <input type={'text'} name={'model'} placeholder={'Model'} maxLength={20} value={model} onInput={onInputChangeModel}/>
                <input type={'number'} name={'year'} placeholder={'Year'} value={year} onInput={onInputChangeYear}/>
                <input type={'number'} name={'price'} placeholder={'Price'} value={price} onInput={onInputChangePrice}/>

                <input type={'submit'} value={'save'}/>
            </form>
                {
                    cars.map(value => <Car key = {value.id} {...value}/>)
                }
        </div>
    );
}

