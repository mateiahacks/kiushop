import '../Products.css';
import '../Carousel.css';
import { useState, useEffect } from 'react';
import Product from '../Product';
import getProducts from '../ProductService';
import { BiPlusCircle } from 'react-icons/bi';
import AddProduct from '../AddProduct';
import server from '../ServerURL.js';

const ProductsEn = () => {
    const [type, setType] = useState("all");
    const [products, setProducts] = useState(getProducts);
    const [showAdd, setShowAdd] = useState(false);
    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const toggleShowAdd = () => {
        setShowAdd(!showAdd);
    }

    const getData = async () => {
        const link = server + "products/page/1"
        const response = await fetch(link, {
            method: 'GET',
            headers: {"Content-Type": "application/json"}
        });
        const result = await response.json();
        setLoaded(true);
        setData(result.products);
        console.log(result.products);
    }

    useEffect(() => {
      getData();
    }, [])

 
    return (
        <div className="products">
            {showAdd && <AddProduct toggleShowAdd={toggleShowAdd}/>}
            <div className="prod__types">
                    <div onClick={() => setType("new")} className={type==="new" ? "prod__type prod-type-selected":"prod__type"}>ახალი პროდუქტი</div>
                    <div onClick={() => setType("featured")} className={type==="featured" ? "prod__type prod-type-selected":"prod__type"}>გამორჩეული პროდუქტი</div>
                    <div onClick={() => setType("all")} className={type==="all" ? "prod__type prod-type-selected":"prod__type"}>ყველა პროდუქტი</div>
                </div>
            <div className="products__inner">
                <div className="products__list">
                {loaded && <div onClick={() => {toggleShowAdd(); window.scrollTo(0, 0);}} className="addProduct">
                    <BiPlusCircle className='addIcon' size={100}/>
                </div>}
                    {/* {
                        products.map((prod) => (type === prod.type || type === "all") && (
                            <Product key={products.indexOf(prod)} id={prod.id} sale={prod.sale} image={prod.image} name={prod.name} price={prod.price}/>
                        ))
                    } */}
                    {
                        data.map((prod) => (prod.featured == true && type === "featured" || (prod.featured == false && type !== "featured") || type === "all") && (
                            <Product key={data.indexOf(prod)} id={prod.id} sale={prod.discount} name={prod.title_ge} price={prod.price} img={prod.images[prod.images.length-1] === undefined ? "":prod.images[prod.images.length-1].img_url}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default ProductsEn;