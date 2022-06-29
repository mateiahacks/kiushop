import { useState, useContext, useEffect } from "react";
import { UserContext } from "../UserContext";
import server from "./ServerURL";
import "./Cart.css";
import FooterEn from "./FooterEn.js";
import Header from "./Header";
import CartProduct from "./CartProduct.js";

const Cart = () => {
  const [shipping, setShipping] = useState(0);
  const { lang, basket, getBasket } = useContext(UserContext);
  const [subtotal, setSubtotal] = useState(basket.total_cost);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    localStorage.getItem("basket_title") && getBasket();
  }, []);

  const addToBasket = async (prod_id, product, q) => {
    const link = server + "basket";
    const res = await fetch(link, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        product_id: prod_id,
        basket_title: localStorage.getItem("basket_title"),
        quantity: q,
      }),
    });
    const data = await res.json();
    setSubtotal(data.basket.total_cost);
    console.log("PUT quant");
    console.log(data);
  };

  return (
    <div className="cart">
      <Header />
      <div className="main">
        <div className="cart-left">
          <h1>Cart</h1>
          <ul>
            <li>Product</li>
            <li>Quantity</li>
            <li>Total</li>
          </ul>
          <div className="line"></div>
          {basket.products &&
            basket.products.map((x) => (
              <CartProduct
                key={x.id}
                img={x.images?.filter((e) => e.main)[0].img_url}
                name={x.title_en}
                price={x.price}
                amount={x.quantity}
                id={x.id}
                product={x}
                addToBasket={addToBasket}
              />
            ))}
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
          <input type="text" placeholder="Enter your address" />

          <label htmlFor="zipcode">ZIP/POSTAL CODE</label>
          <input type="number" placeholder="Enter the code " />

          <h3>SHIPPING</h3>
          <p>${shipping}</p>

          <h3>SUBTOTAL</h3>
          <p>${subtotal ? subtotal : basket.total_cost}</p>
          <div className="button">
            <div className="front">
              {lang === "ka" ? "ყიდვა" : "PROCEED TO CHECKOUT"}
            </div>
            <div className="back"></div>
          </div>
        </div>
      </div>

      <FooterEn />
    </div>
  );
};

export default Cart;
