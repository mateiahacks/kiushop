import HomeKa from "./HomeKa";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import server from "../ServerURL";
import '../Register.css';
import { GoVerified } from 'react-icons/go';

const RegisterEn = ({userData}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [r_password, set_r_password] = useState('');
    const [number, setNumber] = useState("");
    const [success, setSuccess] = useState(false);
    const [data, setData] = useState({});
    const [currentStatus, setCurrentStatus] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const register = async () => {
        const postData = {
            name: firstName,
            surname: lastName,
            email: email,
            password: password,
            phone: number
        }

        const link = server + "register";
        setLoading(true);
        setErrorMessage('');
        const response = await fetch(link, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(postData)
        });
        if(response.status === 200) {
            setSuccess(true);
            setCurrentStatus(200);
            setErrorMessage('');
        }
        const data = await response.json();
        setLoading(false);
        if(response.status === 400) {
            setErrorMessage("*" + data.message);
        }
        setData(data);
        console.log(data);
    }

    const errorStyle = {color: 'red', fontSize: '13px', marginTop: '0px'}

    const submit = (e) => {
        e.preventDefault();
        if(password === r_password && password.length >= 5) {
            register();
        }
    }

    return (
        <div className="register">
            <HomeKa userData={userData}/>
            <Link style={{cursor: 'default'}} to='/ka'><div className="modal__bg"></div></Link> 
            {!success && <div style={{padding: '0 30px 30px 30px'}} className="register__modal">
                <h1 style={{marginTop: '30px'}}>ჩემი ანგარიში</h1>
                <form onSubmit={submit}>
                    <div className="names" style={{marginBottom: '5px'}}>
                        <div>
                            <label>სახელი</label>
                            <input 
                                type="text" 
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </div>
                        <div style={{marginRight: '-40px'}}>
                            <label>გვარი</label>
                            <input 
                                type="text" 
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}    
                                required
                            />
                        </div>
                    </div>
                    <label>მაილი</label>
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label>ტელეფონი</label>
                    <input 
                        type="text"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        required
                    />
                    <label>პაროლი</label>
                    <input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <label>გაიმეორე პაროლი</label>
                    <input 
                        type="password" 
                        value={r_password}
                        onChange={(e) => set_r_password(e.target.value)}
                        required
                    />
                    {loading && <div className="loading-spinner"></div>}
                    {r_password !==password && <p style={errorStyle}>*პაროლები არ ემთხვევა</p>}
                    {(password.length < 5 && password.length > 0) && <p style={errorStyle}>*პაროლის სიგრძე ნაკლებია 5-ზე</p>}
                    {errorMessage !== '' && <p style={errorStyle}>{errorMessage}</p>}
                    <button id="register__submit" type="submit" style={{border: 'none', cursor: 'pointer', padding: '15px'}}>რეგისტრაცია</button>
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