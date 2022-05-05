import Carousel from './Carousel';
import ProductsEn from './ProductsEn';
import "./Home.css";
import FooterEn from './FooterEn.js';
import { useEffect } from 'react';

const HomeEn = () => {

    const enableScroll = () => {
        const temp =  document.getElementsByTagName('body')[0];
        temp.style.margin = '0';
        temp.style.height = '100%';
        temp.style.overflow = 'auto';
    }
    
    useEffect(()=>{
        enableScroll();
    }, []);

    return (
        <div className='home'>
            <Carousel />
            <ProductsEn />
            <FooterEn />
        </div>
    );
}

export default HomeEn;