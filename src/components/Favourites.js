import './Favourites.css';
import Header from './Header';
import FooterEn from './FooterEn';
import FavProduct from './FavProduct';

const Favourites = () => {
    return (
        <div>
            <Header />
            <div className='favourites'>
                <h1>Favorite Product</h1>
                <FavProduct name={'name'} price={12}/>
            </div>
            <FooterEn />
        </div>
    )
}

export default Favourites;