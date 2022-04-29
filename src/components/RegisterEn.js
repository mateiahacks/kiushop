import HomeEn from "./HomeEn";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const RegisterEn = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [r_password, set_r_password] = useState('');

    return (
        <div className="register">
            <HomeEn />
            <Link style={{cursor: 'default'}} to='/'><div className="modal__bg"></div></Link> 
            <div className="register__modal">
                <h1>My Account</h1>
                <form>
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