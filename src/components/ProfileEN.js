import Header from "./Header.js";
import server from "./ServerURL.js";
import { useState } from 'react';

const ProfileEN = () => {
    const [image, setImage] = useState({});
    
    const sendPhoto = async (e) => {
        const formdata = new FormData();
        formdata.append("image", e.target.files[0]);
        const link = server + 'upload/image';
        const response = await fetch(link, {
            method: 'POST',
            body: formdata
        })
        const data = await response.json();
        setImage(data.image);
        console.log(data);
    }


    return (
        <div className="profile">
            <h1>Profile</h1>
            <input type="file" onChange={(e) => {
                sendPhoto(e);
                }} />
            <img src={"data:image/png;base64," + image} alt="" />
        </div>
    )
}

export default ProfileEN;