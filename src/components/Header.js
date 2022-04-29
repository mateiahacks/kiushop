import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { FiSearch, FiMenu } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import { BsHeart, BsCart } from 'react-icons/bs';
import { useEffect } from 'react';

const Header = () => {
    const lang = useLocation().pathname.substring(1, 3);

    const removeDropdown = () => {
        const temp = document.querySelector('.header__right__resp');
        window.addEventListener('resize', () => {
            if(window.innerWidth > 1200) {
                temp.style.display = 'none';
            }
        });
    }

    useEffect(()=> {
        removeDropdown();
    }, []);


    const toggleDropdown = () => {
        const temp = document.querySelector('.header__right__resp');
        if(temp.style.display === 'flex') {
            temp.style.display = 'none';
        } else {
            temp.style.display = 'flex';
        }
    }

    return (
        <nav className="header">
            <div className="header__inner">
                <div className="header__left">
                    <Link className='text-link' to={'/' + lang}><h1 className='logo'>KIUSoft</h1></Link>
                    <Link className='text-link' to='/ka'><div className='lang'>KA</div></Link>
                    <Link className='text-link' to='/en'><div className='lang'>EN</div></Link>
                    <div className='searchbar__container'>
                        <input type="text" className="searchbar" placeholder='Search . . .'/>
                        <FiSearch id='search__icon' size={30}/>
                    </div>
                </div>
                <FiMenu onClick={toggleDropdown} className='menu__icon' size={30} />
                <div className="header__right">
                    <Link className='text-link' to={lang + '/login'}><div className="profile">
                        <CgProfile size={35}/>  
                        <p id='login'>Login</p>
                    </div></Link>
                    <BsHeart size={30}/>
                    <BsCart size={30}/>
                </div>
                <div className="header__right__resp">
                    <Link className='text-link' to={lang + '/login'}><div className="profile">
                        <CgProfile size={35}/>  
                        <p id='login'>Login</p>
                    </div></Link>
                    <BsHeart size={30}/>
                    <BsCart size={30}/>
                </div>
            </div>
        </nav>
    );
}

export default Header;