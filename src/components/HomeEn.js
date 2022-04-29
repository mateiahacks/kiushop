import Carousel from './Carousel';
import ProductsEn from './ProductsEn';
import "./Home.css";

const HomeEn = () => {
    return (
        <div className='home'>
            <Carousel />
            <ProductsEn />
        </div>
    );
}

export default HomeEn;