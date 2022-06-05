import './Product.css';
import { BsHeart } from 'react-icons/bs';
import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../UserContext';

const Product = ({lang, img, id, sale, name, price}) => {

    return (
        <div className="product">
            {sale !== 0 && <div className="sale-pointer">{"-" + sale + "%"}</div>}
            <div className="product__inner">
                <a href={'/product/' + id}><div className="prod__img">
                    {img === "" ? <div id='product'></div>:<img id='product' src={img} alt="product"/>}
                    <div className="bg">
                        <div className="view">{lang == "en" ? "View Plant":"დეტალურად"}</div>
                    </div>
                </div></a>
                <p>{name}</p>
                <p>{"$" + price}</p>
                <div className="prod__action">
                    <div className="add-cart">{lang == "en" ? "ADD TO CART":"კალათაში დამატება"}</div>
                    <BsHeart style={{cursor: 'pointer'}} size={30}/>
                </div>
            </div>
        </div>
    )
}

export default Product;