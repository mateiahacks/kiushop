import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { FiSearch, FiMenu } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import { BsHeart, BsCart } from 'react-icons/bs';
import { useEffect,useState } from 'react';
import logo from '../images/logoBlack.png';
const Header = ({logout, name, logged_in, toggleLogged}) => {
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

    const onLogout = () => {
        toggleLogged();
        logout();
    }



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
                    <Link className='text-link' to={'/' + lang}><img className='logo' src={logo} alt="" /></Link>
                    <Link className='text-link' to='/ka'><div className='lang'>KA</div></Link>
                    <Link className='text-link' to='/en'><div className='lang'>EN</div></Link>
                    <div className='searchbar__container'>
                        <input type="text" className="searchbar" placeholder='Search . . .'/>
                        <FiSearch id='search__icon' size={30}/>
                    </div>
                </div>
                <FiMenu onClick={toggleDropdown} className='menu__icon' size={30} />
                <div className="header__right">
         
                    {logged_in ?  
                    <Link className='text-link' to='/'><div onClick={onLogout} className="profile">
                        <CgProfile size={35}/>  
                        <p id='login'>{name}</p>
                    </div></Link>
                    :
                    <Link className='text-link' to={"/" + lang + "/login"}><div className="profile">
                    
                        <CgProfile size={35}/>  
                        <p id='login'>Login</p>
                    </div></Link>}
                    <BsHeart size={30}/>
                    <BsCart size={30}/>
                </div>
                {logged_in ?
                <div className="header__right__resp">
                    <Link className='text-link' to={'login'}><div className="profile">
                        <CgProfile size={35}/>  
                        <p id='login'>{name}</p>
                    </div></Link>
                    <BsHeart size={30}/>
                    <BsCart size={30}/>
                </div>
                :  
                <div className="header__right__resp">
                    <Link className='text-link' to={'login'}><div className="profile">
                        <CgProfile size={35}/>  
                        <p id='login'>Login</p>
                    </div></Link>
                    <BsHeart size={30}/>
                    <BsCart size={30}/>
                </div>}
            </div>
        </nav>
    );
}


// window.addEventListener("scroll", function(){
//     var nav=this.document.getElementById("stickyNavbar");
//     if(window.scrollY==0){
//         nav.style.top="40px";
//         nav.style.height="185px";
//     }else{
//         nav.style.top="0";
//         nav.style.height="57px";
//     }
    

    
//     // animation: scrolling 2s;
// })

export default Header;