import {Geo} from "./Geo";
export const Geo = ({geo}) => {
    return (
        <ul>
           <li>lay: {geo.lat}</li>
            <li>lng: {geo.lng}</li>
        </ul>
    );
}