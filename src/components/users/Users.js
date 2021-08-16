import {getUsers} from "../serviсe/user.service";

import {useEffect, useState} from "react";
export default function Users () {
    let [users, setUsers] =useState([]);
    useEffect(() => {
        getUsers().then(value => setUsers([...value]));
    },[]);
    return (
        <div>
            {
                users.map((userItem) => <User key = {userItem.id}/>)
            }
        </div>
    )
}