import {users} from "../data-file";

export default function usersList() {
return (
        <div>
            {
                users.map(user=> <div>
                    <ul>
                        <li>{user.id}</li>
                        <li>{user.name}</li>
                        <li>{user.username}</li>
                        <li>{user.email}</li>
                        <li>{user.address}
                            <ul>
                                {/*<li>{user.address.street}</li>*/}
                            </ul>
                        </li>
                    </ul>
                </div>)
            }
        </div>
    );
}
