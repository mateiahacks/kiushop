import './ProductDetail.css'
import Header from './Header.js'
import product1 from '../images/product1.png';
import detail1 from '../images/detail1.png';
import detail2 from '../images/detail2.png';
import detail3 from '../images/detail3.png';
import ProductsEn from './ProductsEn';
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import server from './ServerURL.js';

const ProductDetail = ({logout ,userData, logged_in, toggleLogged}) => {

    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [detailsArr, setDetailsArr] = useState([]);
    const [mainImage,setMainImage]=useState("");
    const [image, setImage] = useState({});

    const getProduct = async () => {
        const link = server + "product/" + id;
        const response = await fetch(link, {
            method: 'GET',
            headers: {"Content-Type": "application/json"}
        });
        const data = await response.json();
        setDetailsArr(data.product.images.map((e) => e.img_url));
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
        const response = await fetch(link, {
            method: 'POST',
            body: formdata
        })
        const data = await response.json();
        setImage(data.image.img_url);
        setMainImage(data.image.img_url);
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
                      detailsArr.map((x) =><img style={{height: '100px', width: '100px'}} onClick={() => setMainImage(x)}  class="detail" src={x} /> )
                        
                  }
              </div>
              <img class="mainImage" onClick={()=>setMainImage(product1)} src={mainImage} alt="" />
              <div className="line_right">
                  <div className="discount_place">
                      -{product.discount}%
                  </div>
                  <h1 style={{width: '400px'}}>{product.title_en}</h1>
                  <p>${product.price}</p>
                  <div className="amount">
                      <label htmlFor="quantity">Quantity</label>
                      <input type="number" id="quantity" min="0"/>
                  </div>
                  <div className="amount">
                      <label htmlFor="currency">Curency</label>
                      <select name="" id="currency">
                          <option value="USD">USD</option>
                          <option value="EUR">EUR</option>
                          <option value="GEL">GEL</option>
                      </select>
                  </div>
                  <button>ADD TO CART</button>
                  <div className="terms_conditions">
                      <input type="checkbox" />
                      <p>I agree with terms and conditions</p>
                  </div>
                  <div className="button">
                      <div className="front">BUY IT NOW</div>
                      <div className="back"></div>
                  </div>
              </div>
         </div>
         
         <input style={{margin: 'auto'}} type="file" onChange={(e) => {
                sendPhoto(e);
                }} />
         <div className="header2">Related Products</div>
         <ProductsEn />
        </div>
     );
}
 
export default ProductDetail;