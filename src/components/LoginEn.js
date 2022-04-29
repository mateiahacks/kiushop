import HomeEn from "./HomeEn";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Login.css';

const LoginEn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async () => {
        const log = {
            email: email,
            password: password
        }
        const link = 'http://9f3e-2a0b-6204-29fc-4100-f424-7276-c95d-17bf.ngrok.io/login';
        const response = await fetch(link, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(log)
        });
        const data = await response.json();
        console.log(data);
    }
    

    const onSubmit = (e) => {
        e.preventDefault();
        login();
        console.log("s");
    }

    return (
        <div className="login">
            <HomeEn />
            <Link style={{cursor: 'default'}} to='/en'><div className="modal__bg"></div></Link>
            <div className="login__modal">
                <h1>My Account</h1>
                <form onSubmit={onSubmit}>
                    <label>EMAIL</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email" 
                        required
                    />
                    <label>PASSWORD</label>
                    <input 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password" 
                        required
                    />
                    <p>New customer? <span><Link to='/en/register'>register here</Link></span></p>
                    <button id="login__submit" type="submit">Login</button>
                </form>
                
            </div>
        </div>
    );
}

export default LoginEn;