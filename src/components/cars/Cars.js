import {useState, useEffect} from "react";
import {getCars} from "../../services/api.service";
import Car from "../car/Car";

export default function Cars () {
    let [cars, setCars] = useState([]);
    useEffect(() => {
        getCars().then(value => setCars(value));
    },[]);
    return(
        <div>
            <div>
                <form>

                </form>
            </div>

            <div>
                {
                    cars.map(value => <Car key = {value.id} {...value}/>)
                }
            </div>
        </div>
    );
}