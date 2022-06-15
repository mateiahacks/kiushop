import "./CartProduct.css";
import { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import { MdRemoveCircle } from "react-icons/md";
import server from "./ServerURL";

const CartProduct = ({ img, name, price, amount, id }) => {
  const [total, setTotal] = useState(price * amount);
  const { deleteFromBasket } = useContext(UserContext);
  return (
    <div className="CartProduct">
      <div className="cart_profile">
        <img src={img} className="profileImg" alt="" />
        <div className="profileInfo">
          <h2>{name}</h2>
          <p>${price}</p>
          <div className="remove">
            <p id="rm_cart" onClick={() => deleteFromBasket(id)}>
              REMOVE
            </p>
          </div>
        </div>
      </div>
      <input type="number" className="amount" min="0" defaultValue={amount} />
      <p className="total">${total && total.toFixed(2)}</p>
    </div>
  );
};

export default CartProduct;
