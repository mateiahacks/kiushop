import { useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import server from './ServerURL';
import './Verify.css';

const Verify = ({header, message,vector}) => {
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
            <img src={vector}  class="vector" />
            <div className="textBox">
                <h1>{header}</h1>
                <p>{message}</p>
                <div className="button">
                    <div className="buttFront" >GET BACK TO HOME PAGE</div>
                    <div className="buttonBack"></div>
                </div>
            </div>
        </div>
    )
}

export default Verify;