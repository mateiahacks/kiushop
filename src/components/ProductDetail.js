import './ProductDetail.css'
import Header from './Header.js'
import ProductsEn from './ProductsEn';
import FooterEn from './FooterEn';
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import server from './ServerURL.js';
import { MdRemoveCircle } from 'react-icons/md';

const ProductDetail = ({logout ,userData, logged_in, toggleLogged}) => {

    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [detailsArr, setDetailsArr] = useState([]);
    const [mainImage,setMainImage]=useState("");
    const [image, setImage] = useState({});
    const [loading, setLoading] = useState(false);
    const [img_ids, set_img_ids] = useState([]);

    const getProduct = async () => {
        const link = server + "product/" + id;
        setLoading(true);
        const response = await fetch(link, {
            method: 'GET',
            headers: {"Content-Type": "application/json"}
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
        const response = await fetch(link, {
            method: 'POST',
            body: formdata
        })
        const data = await response.json();
        setImage(data.image.img_url);
        setMainImage(data.image.img_url);
        console.log(data);
    }

    const removeimg = async (element, img_id) => {
        console.log("remove");
        setDetailsArr(detailsArr.filter((e) => e !== element));
        const response = await fetch(server + "/product/" + id + "/detach_image/" + img_id, {
            method: 'DELETE',
            headers: {"Content-Type" : "application/json"}
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
                                                <MdRemoveCircle size={20} id="rm_circle" onClick={() => removeimg(x, img_ids[detailsArr.indexOf(x)])}/>
                                                <img style={{height: '100px', width: '100px'}} onClick={() => setMainImage(x)}  class="detail" src={x} />
                                            </div> )
                  }
              </div>
              <div id='main_image_w_upload'>
                {loading ? <div class="mainImage"><div className='loading-spinner'></div></div> : <img class={"mainImage"} src={mainImage} alt="" />}
                <input style={{margin: 'auto'}} type="file" onChange={(e) => {
                    sendPhoto(e);
                    }} />
              </div>
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
         <FooterEn />
        </div>
     );
}
 
export default ProductDetail;