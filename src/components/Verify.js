import { useLocation, useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import server from './ServerURL';
import vector from '../images/vector.png';
import './Verify.css';

const Verify = ({header, message}) => {
    const { email, token } = useParams();
    
    const sendData = async () => {
        const log = {
            user_email: email,
            verification_code: token
        }
        const link = server + 'verify';
        const response = await fetch(link, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(log)
        });
        const data = await response.json();
        console.log(data);
    }
    

    useEffect(()=>{
        sendData();
    }, [])


    return (
        <div className="veirfy">
            <img src={vector}  className="vector" />
            <div className="textBox">
                <h1>Your email has been verified</h1>
                <p>Happy shoping</p>
                <Link className='text-link' to={'/'}><div className="button">
                    <div className="buttFront" >GET BACK TO HOME PAGE</div>
                    <div className="buttonBack"></div>
                </div></Link>
            </div>
        </div>
    )
}

export default Verify;