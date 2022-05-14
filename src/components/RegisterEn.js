import HomeEn from "./HomeEn";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import server from "./ServerURL";
import './Register.css';
import { GoVerified } from 'react-icons/go';

const RegisterEn = ({userData}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [r_password, set_r_password] = useState('');
    const [success, setSuccess] = useState(false);

    const register = async () => {
        const postData = {
            name: firstName,
            surname: lastName,
            email: email,
            password: password,
        }

        const link = server + "register";
        const response = await fetch(link, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(postData)
        });
        if(response.status === 200) {
            setSuccess(true);
        }
        const data = await response.json();
        console.log(data);
    }

    const submit = (e) => {
        e.preventDefault();
        register();
    }

    return (
        <div className="register">
            <HomeEn userData={userData}/>
            <Link style={{cursor: 'default'}} to='/'><div className="modal__bg"></div></Link> 
            {!success && <div style={{padding: '0 30px 30px 30px'}} className="register__modal">
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
            </div>}
            {success && <div style={{borderRadius: '20px'}} className="register__modal">
                <div className="register__success">
                    <GoVerified style={{marginBottom: '20px'}} size={50}/>
                    <p style={{fontSize: "22px"}}>Success</p>
                </div>
                <div className="register__verify">
                    <p>Check your email to verify account</p>
                    <a target='_blank' href="https://mail.google.com/mail/u/0/#inbox"><div className="btn-verify">Go to mail</div></a>
                </div>
            </div>}
        </div>
    );
}

export default RegisterEn;