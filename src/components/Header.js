import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { FiSearch, FiMenu } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import { BsHeart, BsCart } from 'react-icons/bs';
import React, { useEffect, useState, useContext } from 'react';
import logo from '../images/logoBlack.png';
import { UserContext } from '../UserContext';

const Header = () => {    
    const {userData, logout, logged_in, toggleLogged, changeLang, lang} = useContext(UserContext);
    const name = userData.name;
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
                    <Link className='text-link' to={'/'}><img className='logo' src={logo} alt="" /></Link>
                    <div onClick={() => changeLang("ka")} className='lang'>KA</div>
                    <div onClick={() => changeLang("en")} className='lang'>EN</div>
                    <div className='searchbar__container'>
                        <input type="text" className="searchbar" placeholder='Search . . .'/>
                        <FiSearch id='search__icon' size={30}/>
                    </div>
                </div>
                <FiMenu onClick={toggleDropdown} className='menu__icon' size={30} />
                <div className="header__right">
         
                    {logged_in ?  
                    <Link className='text-link' to='/'><div className="profile">
                        <CgProfile size={35}/>  
                        <p id='login'>{name}</p>
                    </div></Link>
                    :
                    <Link className='text-link' to={"/login"}><div className="profile">
                    
                        <CgProfile size={35}/>  
                        <p id='login'>{lang==="ka" ? "შესვლა":"Login"}</p>
                    </div></Link>}
                    <Link className='text-link' to={'/favourites/1'}><BsHeart size={30}/></Link>
                    <Link to='/cart/1' className='text-link'><BsCart size={30}/></Link>
                </div>
                {logged_in ?
                <div className="header__right__resp">
                    <Link className='text-link' to={'/'}><div className="profile">
                        <CgProfile size={35}/>  
                        <p id='login'>{name}</p>
                    </div></Link>
                    <Link className='text-link' to={'/favourites/1'}><BsHeart size={30}/></Link>
                    <BsCart size={30}/>
                    <p id='resp_logout' onClick={onLogout}>{lang==="ka" ? "გამოსვლა":"Logout"}</p>
                </div>
                :  
                <div className="header__right__resp">
                    <Link className='text-link' to={'login'}><div className="profile">
                        <CgProfile size={35}/>  
                        <p id='login'>{lang==="ka" ? "გამოსვლა":"Logout"}</p>
                    </div></Link>
                    <Link className='text-link' to={'/favourites/1'}><BsHeart size={30}/></Link>
                    <BsCart size={30}/>
                </div>}
            </div>
            {logged_in && <p id='logout' onClick={onLogout}>{lang==="ka" ? "გამოსვლა":"Logout"}</p>}
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