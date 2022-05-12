import HomeEn from "./HomeEn";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import server from "./ServerURL";
import './Login.css';

const LoginEn = ({ userData, login, logged_in, toggleLogged}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const preventScroll = () => {
        const temp =  document.getElementsByTagName('body')[0];
        temp.style.margin = '0';
        temp.style.height = '100%';
        temp.style.overflow = 'hidden';
    }

    useEffect(()=>{
        preventScroll();
    }, []);
    

    const onSubmit = (e) => {
        e.preventDefault();
        login(email, password);
        console.log("s");
    }

    return (
        <div className="login">
            <HomeEn userData={userData} logged_in={logged_in} toggleLogged={toggleLogged}/>
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