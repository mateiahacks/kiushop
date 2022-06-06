import './CartProduct.css'
import {useState} from 'react'
import { MdRemoveCircle } from 'react-icons/md';

const CartProduct = ({img,name, price, amount}) => {
    const [total,setTotal]=useState(price*amount);
    function calculateTotal(){
     var amount=document.querySelector(".amount").value;
     
    }
    return ( 
        <div className="CartProduct">
            <div className="cart_profile">
            <img src={img} className="profileImg" alt="" />
            <div className="profileInfo">
                <h2>{name}</h2>
                <p>${price}</p>
                <div className="remove">
                <p id='rm_cart'>REMOVE</p>
                </div>
            </div>
            </div>
            <input type="number" className='amount' min="0" defaultValue={amount}/>
            <p className='total'>${total}</p>
        </div>
     );
}
 
export default CartProduct;