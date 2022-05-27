import './Product.css';
import { BsHeart } from 'react-icons/bs';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Product = ({img, id, sale, name, price}) => {



    return (
        <div className="product">
            {sale !== 0 && <div className="sale-pointer">{"-" + sale + "%"}</div>}
            <div className="product__inner">
                <a href={'/en/product/' + id}><div className="prod__img">
                    <img id='product' src={img} alt="product"/>
                    <div className="bg">
                        <div className="view">View Plant</div>
                    </div>
                </div></a>
                <p>{name}</p>
                <p>{"$" + price + ".00"}</p>
                <div className="prod__action">
                    <div className="add-cart">ADD TO CART</div>
                    <BsHeart style={{cursor: 'pointer'}} size={30}/>
                </div>
            </div>
        </div>
    )
}

export default Product;