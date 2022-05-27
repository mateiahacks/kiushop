import HomeKa from "./HomeKa";
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import server from "../ServerURL";
import '../Login.css';

const LoginEn = ({ loading, userData, login, logged_in, toggleLogged}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorFlag, setErrorFlag] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        login(email, password, navigate);
    }
    return (
        <div className="login">
            <HomeKa userData={userData} logged_in={logged_in} toggleLogged={toggleLogged}/>
            <Link style={{cursor: 'default'}} to='/ka'><div className="modal__bg"></div></Link>
            <div className="login__modal">
                <h1>ჩემი ანგარიში</h1>
                <form onSubmit={onSubmit}>
                    <label>მაილი</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email" 
                        required
                    />
                    <label>პაროლი</label>
                    <input 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password" 
                        required
                    />
                    {loading && <div className="loading-spinner"></div>}
                    <p id="login_error" style={{ display: 'none', marginBottom: '30px', color: 'red', textAlign:"center", fontSize: '12px'}} className="error_message">*არასწორი მაილი ან პაროლი</p>
                    <p>ახალი მომხმარებელი? <span><Link to='/ka/register'>დარეგისტრირდი აქ</Link></span></p>
                    <button id="login__submit" type="submit">შესვლა</button>
                </form>
                
            </div>
        </div>
    );
}

export default LoginEn;