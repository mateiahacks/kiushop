import Carousel from './Carousel';
import ProductsEn from './ProductsEn';
import "./Home.css";
import FooterEn from './FooterEn.js';
import Header from './Header';
import { useEffect } from 'react';

const HomeEn = ({logged_in, toggleLogged}) => {

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
            <Header logged_in={logged_in} toggleLogged={toggleLogged}/>
            <Carousel />
            <ProductsEn />
            <FooterEn />
        </div>
    );
}

export default HomeEn;