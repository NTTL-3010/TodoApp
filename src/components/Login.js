import { useContext, useState } from "react";
import { MyContext } from '../contexts/MyContext';

export const Login = () => {
    const [user, setUser] = useState('');
    const { setUsername, setIsLogged } = useContext(MyContext);

    return (
        <>
            <h2>LOGIN</h2>
            <div class="text">
                Username:
                <input value={user} onChange={(e) => {
                    setUser(e.target.value);
                    setUsername(e.target.value);
                    setIsLogged(e.target.value !== '');
                }} />
                Password:
                <input value={user} onChange={(e) => {
                    setUser(e.target.value);
                    setUsername(e.target.value);
                    setIsLogged(e.target.value !== '');
                }} />
                <button class="_login">Login</button>
            </div>
        </>
    )
}