import './Products.css';
import { useState } from 'react';

const ProductsEn = () => {
    const [type, setType] = useState("all");

    return (
        <div className=".products">
            <div className="products__inner">
                <div className="prod__types">
                    <div onClick={() => setType("new")} className={type==="new" ? "prod__type prod-type-selected":"prod__type"}>New Products</div>
                    <div onClick={() => setType("featured")} className={type==="featured" ? "prod__type prod-type-selected":"prod__type"}>Featured Procuts</div>
                    <div onClick={() => setType("all")} className={type==="all" ? "prod__type prod-type-selected":"prod__type"}>All Products</div>
                </div>
            </div>
        </div>
    );
}

export default ProductsEn;