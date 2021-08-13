import {Address} from "./Address";
import './Users.css';
export default function User({user}) {
    // console.log(user)
    return (
        <div className="userBox">
            <ul>
                <li>id: {user.id}</li>
                <li>name: {user.name}</li>
                <li>username: {user.username}</li>
                <li>email: {user.email}</li>
                <Address {...user.address}/>
            </ul>
        </div>

    )
}