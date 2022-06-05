import './ProductDetail.css'
import Header from './Header.js'
import ProductsEn from './ProductsEn';
import FooterEn from './FooterEn';
import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../UserContext';
import { useParams } from 'react-router-dom';
import server from './ServerURL.js';
import { MdRemoveCircle } from 'react-icons/md';
import { upload } from '@testing-library/user-event/dist/upload';

const ProductDetail = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [detailsArr, setDetailsArr] = useState([]);
    const [mainImage,setMainImage]=useState("");
    const [image, setImage] = useState({});
    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [img_ids, set_img_ids] = useState([]);

    const {userData, logout, logged_in, toggleLogged, lang} = useContext(UserContext);

    const getProduct = async () => {
        const link = server + "product/" + id;
        setLoading(true);
        const response = await fetch(link, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + localStorage.getItem("access_token")
            }
        });
        const data = await response.json();
        setLoading(false);
        setDetailsArr(data.product.images.map((e) => e.img_url));
        set_img_ids(data.product.images.map((e) => e.id));
        if(data.product.images[0] !== undefined) {
            setMainImage(data.product.images[0].img_url);
        }
        setProduct(data.product);
        console.log(data);
    }

    const sendPhoto = async (e) => {
        const formdata = new FormData();
        formdata.append("image", e.target.files[0]);
        const link = server + 'product/' + id + '/attach_image';
        const img = document.getElementById('main_img');
        img.style.display = 'none';

        setUploading(true);

        const response = await fetch(link, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("access_token")
            },
            body: formdata
        })
        const data = await response.json();
        setImage(data.image.img_url);
        setDetailsArr([...detailsArr, data.image.img_url]);
        setMainImage(data.image.img_url);
        img.style.display = 'block';
        setUploading(false);
        console.log(data);
    }

    const removeimg = async (element, img_id) => {
        console.log("remove");
        setDetailsArr(detailsArr.filter((e) => e !== element));
        const response = await fetch(server + "/product/" + id + "/detach_image/" + img_id, {
            method: 'DELETE',
            headers: {
                "Content-Type" : "application/json",
                'Authorization': 'Bearer ' + localStorage.getItem("access_token")
            },
            
        })
        const data = await response.json();
        console.log(data);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        getProduct();
        
    }, []);
    


    return ( 
        <div className="product_details">
        <Header logout={logout} name={userData.name} logged_in={logged_in} toggleLogged={toggleLogged}/>
         <div className="product_line">
              <div className="line_left">
                  {
                      detailsArr.map((x) =><div className='left_img'>
                                                {userData.permission==="admin" && logged_in && <MdRemoveCircle size={20} id="rm_circle" onClick={() => removeimg(x, img_ids[detailsArr.indexOf(x)])}/>}
                                                <img style={{height: '100px', width: '100px'}} onClick={() => setMainImage(x)}  class="detail" src={x} />
                                            </div> )
                  }
              </div>
              <div id='main_image_w_upload'>
                {loading || uploading ? <div class="mainImage"><div className='loading-spinner'></div></div> : 
                <div className='mainImage'>
                    <img id='main_img' src={mainImage} alt=""/>
                    {userData.permission === "admin" && logged_in && <input className="main_upload" type="file" onChange={(e) => {
                        sendPhoto(e);
                    }} />}
                </div>}
                
              </div>
              <div className="line_right">
                  <div className="discount_place">
                      -{product.discount}%
                  </div>
                  <h1 style={{width: lang === "ka" ? "580px":"400px"}}>{lang==="ka" ? product.title_ge:product.title_en}</h1>
                  <p>${product.price}</p>
                  <div className="amount">
                      <label htmlFor="quantity">{lang==="ka" ? "რაოდენობა":"Quantity"}</label>
                      <input type="number" id="quantity" min="0"/>
                  </div>
                  <div className="amount">
                      <label htmlFor="currency">{lang==="ka" ? "ვალუტა":"Curency"}</label>
                      <select name="" id="currency">
                          <option value="USD">USD</option>
                          <option value="EUR">EUR</option>
                          <option value="GEL">GEL</option>
                      </select>
                  </div>
                  <button style={{width: "360px"}}>{lang=="ka" ?  "კალათაში დამატება":"ADD TO CART"}</button>
                  <div className="terms_conditions">
                      <input type="checkbox" />
                      <p>{lang==="ka" ? "ვეთანხმები წესებს და პირობებს":"I agree with terms and conditions"}</p>
                  </div>
                  <div className="button">
                      <div className="front">{lang==="ka" ? "ყიდვა ახლა":"BUY IT NOW"}</div>
                      <div className="back"></div>
                  </div>
              </div>
         </div>
         
         <div className="header2">{lang==="ka" ? "მსგავსი პროდუქტი":"Related Products"}</div>
         <ProductsEn />
         <FooterEn />
        </div>
     );
}
 
export default ProductDetail;