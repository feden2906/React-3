import {useState} from "react";
import {saveUser} from "../services/user.service";

export default function ControlledForm() {
    let [name, setName] = useState('name');
    let [email, setEmail] = useState('email');
    let[user, setUser] = useState({name: '', email: ''});

const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    let tempUser = {name,email};
    setUser({...tempUser});
    saveUser(tempUser);

}
let onInputChangeName = (e) => {
    let userName = e.target.value;
    setName(userName);

};
let onInputChangeEmail = (e) => {
    let email = e.target.value;
    setEmail(email);

};

return(
    <div>
        <form onSubmit={onSubmitForm}>
            <input type="text" name={'name'} value={name} onInput={onInputChangeName}/>
            <input type="email" name={'email'} value={email} onInput={onInputChangeEmail}/>

            <input type="submit" value={'save'}/>
        </form>
    </div>
);
}