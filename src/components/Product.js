import './Product.css';
import { BsHeart } from 'react-icons/bs';

const Product = ({image, name, price}) => {
    return (
        <div className="product">
            <div className="product__inner">
                <img src={image} alt="product" height={450} width={320}/>
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