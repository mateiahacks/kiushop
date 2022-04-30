import './Products.css';
import { useState } from 'react';
import Product from './Product';
import getProducts from './ProductService';

const ProductsEn = () => {
    const [type, setType] = useState("all");
    const [products, setProducts] = useState(getProducts);

    return (
        <div className=".products">
            <div className="products__inner">
                <div className="prod__types">
                    <div onClick={() => setType("new")} className={type==="new" ? "prod__type prod-type-selected":"prod__type"}>New Products</div>
                    <div onClick={() => setType("featured")} className={type==="featured" ? "prod__type prod-type-selected":"prod__type"}>Featured Procuts</div>
                    <div onClick={() => setType("all")} className={type==="all" ? "prod__type prod-type-selected":"prod__type"}>All Products</div>
                </div>
                <div className="products__list">
                    {
                        products.map((prod) => (
                            <Product image={prod.image} name={prod.name} price={prod.price}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default ProductsEn;