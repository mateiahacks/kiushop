import './Products.css';
import './Carousel.css';
import { useState } from 'react';
import Product from './Product';
import getProducts from './ProductService';

const ProductsEn = () => {
    const [type, setType] = useState("all");
    const [products, setProducts] = useState(getProducts);

    return (
        <div className="products">
            <div className="prod__types">
                    <div onClick={() => setType("new")} className={type==="new" ? "prod__type prod-type-selected":"prod__type"}>New Products</div>
                    <div onClick={() => setType("featured")} className={type==="featured" ? "prod__type prod-type-selected":"prod__type"}>Featured Procuts</div>
                    <div onClick={() => setType("all")} className={type==="all" ? "prod__type prod-type-selected":"prod__type"}>All Products</div>
                </div>
            <div className="products__inner">
                <div className="products__list">
                    {
                        products.map((prod) => (type === prod.type || type === "all") && (
                            <Product key={products.indexOf(prod)} sale={prod.sale} image={prod.image} name={prod.name} price={prod.price}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default ProductsEn;