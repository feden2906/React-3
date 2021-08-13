import {usersList} from "../data-file";
import User from "./User";

export default function Users() {
    return (
        <div>
            {
                usersList.map(userItem => <User key={userItem.id} user={userItem}/>)
            }
        </div>
    );
}
