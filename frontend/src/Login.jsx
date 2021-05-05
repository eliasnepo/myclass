import { useState } from "react"
import history from "./core/utils/history";
import { makeLogin } from "./core/utils/request";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitForm = (event) => {
        event.preventDefault();
        const user = {
            username,
            password
        }
        console.log(user);
        makeLogin(user)
        .then(response => {
            // console.log(response);
            localStorage.setItem('app-token', JSON.stringify(response.data))
            history.push('/')
        });
    }

    return (
        <form onSubmit={onSubmitForm}>
            <input type="email" value={username} onChange={event => setUsername(event.target.value)} />
            <input type="password" value={password} onChange={event => setPassword(event.target.value)}/>
            <button>DOASDJIOAS</button>
        </form>
    )
}

export default Login;