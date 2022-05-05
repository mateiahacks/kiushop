import './Product.css';
import { BsHeart } from 'react-icons/bs';

const Product = ({image, name, price}) => {
    return (
        <div className="product">
            <div className="product__inner">
                <div className="prod__img">
                    <img id='product' src={image} alt="product"/>
                    <div className="bg">
                        <div className="view">View Plant</div>
                    </div>
                </div>
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