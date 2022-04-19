import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.png';
import book from '../images/book.png';

const Header = ({toggleLang, lang}) => {
    const loc = useLocation().pathname;

    return (
        <nav className="header">
            <div className="header__inner">
                <Link style={{cursor: 'pointer', marginLeft: '-60px'}} to={loc.substring(0, 3)}><img width={300} src={logo} alt="logo" /></Link>
                <div className='navbar__left d-flex'>
                    <div className="langs d-flex">
                        <Link className='text-link' to={"ka" + loc.substring(3)}><div onClick={toggleLang} className="lang">KA</div></Link>
                        <Link className='text-link' to={"en" + loc.substring(3)}><div onClick={toggleLang} className="lang">EN</div></Link>
                    </div>
                    <div className="btn book">
                        <img style={{marginRight: '15px'}} d='bell' src={book} alt="booking" />
                        <h3>Book Now</h3>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;