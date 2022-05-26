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
    var name="Monstera";
    var detailsArr=[product1,detail1,detail2,detail3,detail3,detail3];
    // var mainImage=product1;
    const [mainImage,setMainImage]=useState(product1);
    var discount=50;
    var Price=20.00;

    const getProduct = async () => {
        const link = server + "product/" + id;
        const response = await fetch(link, {
            method: 'GET',
            headers: {"Content-Type": "application/json"}
        });
        const data = await response.json();
        setProduct(data.product);
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
                      detailsArr.map((x) =><img onClick={() => setMainImage(x)}  class="detail" src={x} /> )
                        
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
         <div className="header2">Related Products</div>
         <ProductsEn />
        </div>
     );
}
 
export default ProductDetail;