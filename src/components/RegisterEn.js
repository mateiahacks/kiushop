import HomeEn from "./HomeEn";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const RegisterEn = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [r_password, set_r_password] = useState('');

    const preventScroll = () => {
        const temp =  document.getElementsByTagName('body')[0];
        temp.style.margin = '0';
        temp.style.height = '100%';
        temp.style.overflow = 'hidden';
    }

    useEffect(()=>{
        preventScroll();
    }, []);

    const register = async () => {
        const postData = {
            name: firstName,
            surname: lastName,
            email: email,
            password: password,
        }

        const link = "http://35.234.126.239:5002/register";
        const response = await fetch(link, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(postData)
        });
        const data = await response.json();
        console.log(data);
    }

    const submit = (e) => {
        e.preventDefault();
        register();
    }

    return (
        <div className="register">
            <HomeEn />
            <Link style={{cursor: 'default'}} to='/'><div className="modal__bg"></div></Link> 
            <div className="register__modal">
                <h1>My Account</h1>
                <form onSubmit={submit}>
                    <div className="names">
                        <div>
                            <label>FIRST NAME</label>
                            <input 
                                type="text" 
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div style={{marginRight: '-40px'}}>
                            <label>LAST NAME</label>
                            <input 
                                type="text" 
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}    
                            />
                        </div>
                    </div>
                    <label>EMAIL</label>
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>PASSWORD</label>
                    <input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label>CONFIRM PASSWORD</label>
                    <input 
                        type="password" 
                        value={r_password}
                        onChange={(e) => set_r_password(e.target.value)}
                    />
                    <button id="register__submit" type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}

export default RegisterEn;