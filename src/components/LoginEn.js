import HomeEn from "./HomeEn";
import { Link } from 'react-router-dom';
import { useState, useEffect, useReducer } from 'react';
import './Login.css';

const LoginEn = ({logged_in, toggleLogged}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState({});

    const preventScroll = () => {
        const temp =  document.getElementsByTagName('body')[0];
        temp.style.margin = '0';
        temp.style.height = '100%';
        temp.style.overflow = 'hidden';
    }

    useEffect(()=>{
        preventScroll();
    }, []);

    const login = async () => {
        const log = {
            email: email,
            password: password
        }
        const link = 'http://35.234.126.239:5002/login';
        const response = await fetch(link, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(log)
        });
        const data = await response.json();
        if (response.status === 200) {
            toggleLogged();
            setUserData(data.user);
        }

        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("refresh_token", data.refresh_token);

        console.log(data);
        console.log(logged_in);

    }
    

    const onSubmit = (e) => {
        e.preventDefault();
        login();
        console.log("s");
    }

    return (
        <div className="login">
            <HomeEn name={userData.name} logged_in={logged_in} toggleLogged={toggleLogged}/>
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