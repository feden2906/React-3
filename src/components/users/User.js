import {Address} from "./Address";

export default function User({user}) {
    // console.log(user)
    return (
        <ul>
            <li>id: {user.id}</li>
            <li>name: {user.name}</li>
            <li>username: {user.username}</li>
            <li>email: {user.email}</li>
            <Address {...user.address}/>
        </ul>
    )
}