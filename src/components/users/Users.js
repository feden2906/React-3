import {useEffect, useState} from "react";
import {findAllByDisplayValue} from "@testing-library/react";
import {getUsers} from "../user.service";

export default function Users () {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(value => setUsers([...value]));
    }, []);

    return (
        <div>
            {
                users.map(value => <User key={value.id} value={value}/>)
            }
        </div>
    );
}
