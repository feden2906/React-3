import {useState, useEffect} from "react";
import {getCars, postCar} from "../../services/api.service";
import Car from "../car/Car";

export default function Cars() {
    let[model, setModel] = useState('');
    let[year, setYear] = useState('');
    let[price, setPrice] = useState('');

    let[сar, setCar] = useState({model: '', year: 0, price: 0});

    const onSubmitForm = (e) => {
        e.preventDefault();
        let tempCar = {model, year, price};
        console.log(tempCar);   // car is real but all data is String!
        setCar({...tempCar});       // hz
        postCar(tempCar);
    };

    let onInputChangeModel = (e) => {
        let model = e.target.value;
        setModel(model);
    };
    let onInputChangeYear = (e) => {
        let year = e.target.value;
        console.log(year + typeof year);        // Why it is string?
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
                <input type={'text'} name={'model'} value={model} placeholder={'Model'} maxLength={20}  onInput={onInputChangeModel}/>
                <input type={'number'} name={'year'} value={year} placeholder={'Year'} min={1990} max={2021} onInput={onInputChangeYear}/>
                <input type={'number'} name={'price'} value={price} placeholder={'Price'} min={0} onInput={onInputChangePrice}/>

                <input type={'submit'} value={'save'}/>
            </form>

            {
                cars.map(value => <Car key = {value.id} {...value}/>)
            }
        </div>
    );
}

