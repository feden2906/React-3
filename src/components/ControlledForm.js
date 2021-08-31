import {useState} from "react";

export default function ControlledForm() {
    let [name, setName] = useState('name');
    let [email, setEmail] = useState('email');

const onSubmitForm = (e) => {
    e.preventDefault();
    console.log('dfjb');
}
return(
    <div>
        <form onSubmit={onSubmitForm}>
            <input type="text" name={'username'} value={name}/>
            <input type="email" name={'email'} value={email}/>

            <input type="submit" value={'save'}/>
        </form>
    </div>
);
}