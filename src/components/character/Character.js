import {simpsons} from "../data-file";
import Simpson from "../simpson/Simpson";

export default function Character (){
    return (
        <div>
            {
                simpsons.map((simpso, i) => <Simpson key={i} simpson={simpso}/>)
            }
        </div>
    );
}