import { useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import server from './ServerURL';

const Verify = () => {
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
        <div style={{marginTop: "200px"}}>
            <h1>verify</h1>
            <h2>{"email: " + email}</h2>
            <h2>{"token: " + token}</h2>
        </div>
    )
}

export default Verify;