import {Geo} from "./Geo";
export const Address = ({city, street, suite, zipcode, geo}) => {
    return (
        <ul>
            <li>city: {city}</li>
            <li>street: {street}</li>
            <li>suite: {suite}</li>
            <li>zipcode: {zipcode}</li>
            <li>geo: <Geo {...geo}/></li>
        </ul>
    )
}

