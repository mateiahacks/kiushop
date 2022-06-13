import { useState, useContext } from 'react';
import { UserContext } from '../UserContext';
import './Cart.css';
import FooterEn from './FooterEn.js';
import Header from './Header';
import CartProduct from './CartProduct.js'

const Cart = () => {
    const [cartList,setCartList]=useState([
        ["https://s3-alpha-sig.figma.com/img/9739/8ed6/036cd4553a35ae251579c446c66a2d74?Expires=1655078400&Signature=cDvN8uQil8UNzI-j8StRoiftATVSDqhEbgR4GLh6J0zDejtW71TXfYAiKZXC1ptK3oc6u7jFrkX~ZfZZE~SjEkFOurSrhXJQRPe6CZN2fWLEz4VhUf0tGKQWWUN9Ixy9C7PIN-xgwP1kqwROdGdQQHfKSphX~2t81DY3liSG1uFSUElI872ur3AnSkMdTvDqcqiHkjGEpOTTeUbqgCcSIQ8i1KPSboPC7p9tpEBUeDPKup2Ts0ER8HN4L~Ewn3UHFRwI07Sl1xD2l0TPLt5tXicgFQOnEDzKYtT67ejzuzWVhangA20FBIeW~2mxh3tlWJxhtXopc1fjZVC7p-cTgg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
         "Chamaedorea",
        12.50,
         1],
        ["https://s3-alpha-sig.figma.com/img/fc02/9aa1/d67135cc0060e5613780dc4756fd4137?Expires=1655078400&Signature=dpqGp8BwhKghtiZqOPE2MEjM7khzBycXY-F972tUkrO~UJMa0LZm3pSXftq~L6qM96EW7c~URAzSPZWOgtKLmPAL~CBjqiqrTGvXPdzJ5pJnDMHmMU3AJxgBbQ60alioH2f4vOsPjyN0GbRBYRh~cZy920o-PcDaPUdDrDMRdRlgYNV8UFvuGhy9dRdrbOv4DurJqnE4lsLnOkBElXgWUcx-BjOjgFNzG3UD5kFirRqHPTq96IUogPtzZLAGK3mohjdyQOkVUFTB~meV9synuzW5mPDwOIxHtzs7BBqH1ZjwfBfxtdpVhDfVgfUgCtjn17MUWGVRiC~g3oGqx7ZFUQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
         "Monstera",
        30.50,2],
        ["https://s3-alpha-sig.figma.com/img/95c5/abf2/e240b60be7cec0ebbe5d3e67bf25e33c?Expires=1655078400&Signature=gfb-vYDR25Yb3b0J9eMby1YnTXGD08jxU5N26oPT4OtWU~ZASrZOho3iLabqjsy16BrQ7w4xCnZrK56DyKLo5yDEavc22gZaxe6BsqZwyXqIxR3T7xV6uPaLG4dEhXYMTE4pGsuyc68VSMybml6Y2T1fyQc4xjQ4Wtl7TYatPiB3HYrSK6HkgFteiaYaEm1KfsJlI5ME1deAXKDcbabWyiUyPAgza1aBkmAgsQxU2xGnsRQ1osh3nyLeUA21vm4f-FM50xiXdwB1TwjWWefMXMgww9sRmDtp8avvqsSBF~Tl5SX6uWpgVzP7ge~as0OrI6F1q7UwFEYxNy3MEzca0g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
         "Strelitzia",
        30.99,3],
    ]);
    const [shipping,setShipping]=useState(0);
    const [subtotal,setSubtotal]=useState(0); 
    const { lang } = useContext(UserContext);
    return ( 
        <div className="cart">
<Header/>
<div className="main">
<div className="cart-left">
<h1>Cart</h1>
<ul>
    <li>Product</li>
    <li>Quantity</li>
    <li>Total</li>
</ul>
<div className="line"></div>
{cartList.map((x)=><CartProduct img={x[0]} name={x[1]} price={x[2]} amount={x[3]}/>)}
{/* <CartProduct img="https://s3-alpha-sig.figma.com/img/fc02/9aa1/d67135cc0060e5613780dc4756fd4137?Expires=1655078400&Signature=dpqGp8BwhKghtiZqOPE2MEjM7khzBycXY-F972tUkrO~UJMa0LZm3pSXftq~L6qM96EW7c~URAzSPZWOgtKLmPAL~CBjqiqrTGvXPdzJ5pJnDMHmMU3AJxgBbQ60alioH2f4vOsPjyN0GbRBYRh~cZy920o-PcDaPUdDrDMRdRlgYNV8UFvuGhy9dRdrbOv4DurJqnE4lsLnOkBElXgWUcx-BjOjgFNzG3UD5kFirRqHPTq96IUogPtzZLAGK3mohjdyQOkVUFTB~meV9synuzW5mPDwOIxHtzs7BBqH1ZjwfBfxtdpVhDfVgfUgCtjn17MUWGVRiC~g3oGqx7ZFUQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" name={"monstera"} price="30 "/> */}

</div>
<div className="cart-right">
<h1>Cart total</h1>
<label htmlFor="country">COUNTRY</label>
<select name="country" id="country">
    <option value="Georgia">Georgia</option>
    <option value="USA">USA</option>
    <option value="UK">UK</option>
    <option value="Poland">Poland</option>
    <option value="Ukraine">Ukraine</option>
    <option value="Kanada">Kanada</option>
</select>
<label htmlFor="address">ADDRESS</label>
<input type="text" placeholder='Enter your address' />

<label htmlFor="zipcode">ZIP/POSTAL CODE</label>
<input type="number" placeholder='Enter the code '/>

<h3>SHIPPING</h3>
<p>${shipping}</p>

<h3>SUBTOTAL</h3>
<p>${subtotal}</p>
<div className="button">
                      <div className="front">{lang==="ka" ? "ყიდვა":"PROCEED TO CHECKOUT"}</div>
                      <div className="back"></div>
                  </div>
</div>
</div>

<FooterEn/>
        </div>
     );
}
 
export default Cart;