import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { FiSearch, FiMenu } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import { BsHeart, BsCart } from 'react-icons/bs';
import React, { useEffect, useState, useContext } from 'react';
import logo from '../images/logoBlack.png';
import heart from '../images/heart.png';
import { UserContext } from '../UserContext';
// import SearchElement from './SearchElement.js';
import server from './ServerURL.js';
const Header = () => {    
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [type, setType] = useState("all");
    const [curency, setCurency]=useState("USD");
    const [kursi, setKursi]=useState(2.92);
    const {
        userData,
        logout,
        logged_in,
        set_logged_in,
        changeLang,
        lang,
        basket,
        cartSize,
      } = useContext(UserContext);
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
        set_logged_in(false);
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
    const mod=document.querySelector(".searchModal");
  const searshModal=()=>{
      
      if(mod.style.display!="none"){
        mod.style.display="none";
      }else{
          mod.style.display="flex";
      }
     

  }

  window.onclick = function(event) {
    if (event.target == mod) {
      mod.style.display = "none";
    }
  }
  const getData = async () => {
    const link = server + "products/page/1"
    const response = await fetch(link, {
        method: 'GET',
        headers: localStorage.getItem("access_token") ? {
            "Content-Type": "application/json",
            'Authorization': 'Bearer ' + localStorage.getItem("access_token")
        } : {
            "Content-Type": "application/json",
            
        }
    });
    const result = await response.json();
    setLoaded(true);
    setData(result.products);

}

useEffect(() => {
    getData();
  
}, [])

console.log(data)
const check=function (){
    setData2([]);
const prods=document.querySelector(".prods");
prods.innerHTML="";
const searchbar=document.querySelector(".searchbar").value;
for(var i of data){
    var boo=false
    for(var j=0; j<=i.title_en.length-searchbar.length;j++){
        if(searchbar==i.title_en.toLowerCase().substring(j, j+searchbar.length) ){
            boo=true;
            }   
    }
    for(var j=0; j<=i.title_ge.length-searchbar.length;j++){
        if(searchbar==i.title_ge.substring(j, j+searchbar.length) ){
            boo=true;
            }   
    }
for(var j=0; j<=i.description_en.length-searchbar.length;j++){
    if(searchbar==i.description_en.toLowerCase().substring(j, j+searchbar.length) ) {
        boo=true;
        }   
}
for(var j=0; j<=i.description_ge.length-searchbar.length;j++){
    if(searchbar==i.description_ge.substring(j, j+searchbar.length) ) {
        boo=true;
        }   
}

if(boo){
    prods.innerHTML+=` <a href="/product/${i.id}" class="searchLink">
        <div class="SearchElement" id="searchel">

        <img id="searchImg" src=${i.images.filter((e) => e.main)[0] ? i.images.filter((e) => e.main)[0].img_url:""} alt="" />
            <div class="info">
                <p class="searchName">${i.title_en}</p>
                    <div class="prices">
                        <div class="pricess">
                        <p class=${i.discount!=0? "":"nodiscount"}> ${curency=="USD"? "$":"₾"}${ curency=="USD"? i.price: Math.floor( i.price* kursi )}</p>
                        <h3>$${Math.floor((i.price*(100-i.discount))/100)}</h3>
                        <div class=${i.discount!=0? "discount":"nodiscount"}>-${i.discount}%</div>
                        </div>
                        
                    </div>
          
            <div class="addto">
            <button>ADD TO CART</button>
            <img src="${heart}"/></div>
            </div>
        </div>     
   </a>`
}

}


}
const changeCurr=function(e){
    alert(e)
    this.style.backgroundColor="red";
   
}
    return (
        <nav className="header">
            
            <div className="header__inner">
           
                <div className="header__left">
                
                    <Link className='text-link' to={'/'}><img className='logo' src={logo} alt="" /></Link>
                    <div onClick={() => changeLang("ka")} className='lang'>KA</div>
                    <div onClick={() => changeLang("en")} className='lang'>EN</div>
                    
                    <div className='searchbar__container'>
                        
                        <input type="text" className="searchbar" placeholder='Search . . .' onKeyUp={()=>
                        {   const searchbar=document.querySelector(".searchbar").value;
                            if(searchbar.length<=0){
                                document.querySelector(".prods").innerHTML="";
                            }else{
                                check();
                            }
                            
                            }}/>
                        <FiSearch id='search__icon' size={30}/>
                        <div className="searchModal">
                   
                     <div className="parameters">
                      
                     </div>
                     <div className="prods">
                    

                     </div>
                    </div>
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
                    <a href="/cart/1" className="text-link cart-icon">
            {cartSize !== 0 && <div className="cart-number">{cartSize}</div>}
            <BsCart size={30} />
          </a>
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
                        <CgProfile size={35} />  
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

export default Header;