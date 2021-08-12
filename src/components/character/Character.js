import {simpsons} from "../data-file";

export default function Character (){
    return (
        <div>
            {
                simpsons.map(simpson =>
                    <div>
                        <h2>{simpson.name} {simpson.surname}</h2>
                        <p>Age: {simpson.age}</p>
                        <p>Info: {simpson.info}</p>
                        <img src={simpson.photo}/>
                    </div>)
            }
        </div>
    );
}