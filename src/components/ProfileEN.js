import Header from "./Header.js";
import server from "./ServerURL.js";
import { useState } from 'react';

const ProfileEN = () => {
    const [image, setImage] = useState({});
    
    const sendPhoto = async (e) => {
        const formdata = new FormData();
        formdata.append("image", e.target.files[0]);
        const link = server + 'product/1/attach_image';
        const response = await fetch(link, {
            method: 'POST',
            body: formdata
        })
        const data = await response.json();
        setImage(data.image.img_url);
        console.log(data);
    }


    return (
        <div className="profile">
            <h1>Profile</h1>
            <input type="file" onChange={(e) => {
                sendPhoto(e);
                }} />
            <img src={image} alt="" />
        </div>
    )
}

export default ProfileEN;