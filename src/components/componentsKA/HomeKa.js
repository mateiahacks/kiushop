import Carousel from '../Carousel';
import ProductsKa from './ProductsKa';
import "../Home.css";
import FooterEn from '../FooterEn.js';
import HeaderKA from './HeaderKa';
import { useEffect } from 'react';

const HomeEn = ({logout ,userData, logged_in, toggleLogged}) => {

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
            <HeaderKA logout={logout} name={userData.name} logged_in={logged_in} toggleLogged={toggleLogged}/>
            <Carousel />
            <ProductsKa />
            <FooterEn />
        </div>
    );
}

export default HomeEn;