import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import HomeEn from './components/HomeEn.js';
import ProductDetail from './components/ProductDetail.js';
import LoginEn from './components/LoginEn.js';
import RegisterEn from './components/RegisterEn.js';
import Verify from './components/Verify.js';
import SearchPage from './components/SearchPage.js';
import server from './components/ServerURL.js';
import vector from './images/vector.png';
import MessengerCustomerChat from 'react-messenger-customer-chat/lib/MessengerCustomerChat';
import Favourites from './components/Favourites.js';
import Cart from './components/Cart.js';
import { UserContext } from './UserContext.js';

const App = () => {
  const [logged_in, set_logged_in] = useState(false);
  const [LoginLoading, setLoginLoading] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    name: "",
    surname: "",
  });
  const [lang, set_lang] = useState(localStorage.getItem('lang') !==undefined ?  localStorage.getItem('lang'):'en');

  const changeLang = (newLang) => {
    set_lang(newLang);
    localStorage.setItem("lang", newLang);
  }

  const checkUser = async () => {
    const link = server + 'user_info';
    const response = await fetch(link, {
      method: 'GET',
      headers: {
        "Content-Type":"application/json",
        'Authorization': 'Bearer ' + localStorage.getItem("access_token")
      }
    });
    const data = await response.json();
    if(response.status === 200) {
      set_logged_in(true);
      console.log("my logged in " + logged_in);
      setUserData(data.user);
    }
    console.log("checked");
    console.log(data);
  }

  const login = async (em, pass, nav) => {
    const log = {
        login: em,
        password: pass
    }
    const loginError = document.getElementById("login_error");

    console.log(log);
    const link = server + 'login';

    setLoginLoading(true);
    loginError.style.display = 'none';
    const response = await fetch(link, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(log)
    });
    const data = await response.json();
    setLoginLoading(false);
    if(response.status === 200) {
      set_logged_in(true);
      setUserData(data.user);
      nav("/");
      loginError.style.display = "none";
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("refresh_token", data.refresh_token);
    } else {
      loginError.style.display = "block";
    }
    console.log(data);
    console.log(logged_in);

  }

  // 401 if not logged in
  // 403 if not admin


  const logout2 = async () => {
    const link = server + 'logout2';
    const response = await fetch(link, {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
                  'Authorization': 'Bearer ' + localStorage.getItem("refresh_token")            
        },    
    });
    const data = await response.json();
    console.log(data);
  }

  const logout = async () => {
    const link = server + 'logout';
    const response = await fetch(link, {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
                  'Authorization': 'Bearer ' + localStorage.getItem("access_token")            
        },    
    });
    console.log(localStorage.getItem("refresh_token") + " : " + localStorage.getItem("access_token"));
    const data = await response.json();
    set_logged_in(false);
    //setUserData(null);
    logout2();
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    console.log(data);
    window.location.reload();
  }

  useEffect(()=>{
    localStorage.getItem("access_token") && checkUser();
  }, []);

  return (
    <Router>
      <UserContext.Provider value={{logged_in, lang, changeLang, set_logged_in, userData, logout, checkUser}}>
        <div className="app">
            <Routes>
                <Route path='/' element={
                  <HomeEn userData={userData}/>
                } />
                
                <Route path='/login' element={ 
                  <LoginEn loading={LoginLoading} login={login}/> 
                } />
                <Route path='/register' element={ 
                  <RegisterEn userData={userData}/> 
                } />
                <Route path='/search' element={<SearchPage />}/>
                <Route path='/cart/:id' element={<Cart />}/>
                <Route path='/verify' element={ <Verify /> } />
                <Route path='/favourites/:id' element={<Favourites />}/>
                <Route path={'/product/:id'} element={ <ProductDetail /> } />      
                
                <Route path={'/kiushop/verify/:email/:token'} element={<Verify />}/>
                <Route path='/addproduct'  element/>
                
            </Routes>  
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
