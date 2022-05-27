import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { useState } from 'react';
import HomeEn from './components/HomeEn.js';
import ProductDetail from './components/ProductDetail.js';
import LoginEn from './components/LoginEn.js';
import RegisterEn from './components/RegisterEn.js';
import Verify from './components/Verify.js';
import server from './components/ServerURL.js';
import ProfileEN from './components/ProfileEN.js';
import vector from './images/vector.png';
import MessengerCustomerChat from 'react-messenger-customer-chat/lib/MessengerCustomerChat';
import HomeKa from './components/componentsKA/HomeKa.js';
import LoginKa from './components/componentsKA/LoginKa.js';
import RegisterKa from './components/componentsKA/RegisterKa.js';

const App = () => {
  const [logged_in, set_logged_in] = useState(localStorage.getItem("access_token")===null ? false:true);
  const [LoginLoading, setLoginLoading] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    name: logged_in ? localStorage.getItem("user_name"):"",
    surname: "",
  });

  const toggleLogged = () => {
    set_logged_in(!logged_in);
  }

  const login = async (em, pass, nav) => {
    const log = {
        email: em,
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
      toggleLogged();
      setUserData(data.user);
      nav("/en");
      loginError.style.display = "none";
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("refresh_token", data.refresh_token);
      localStorage.setItem("user_name", data.user.name);
    } else {
      loginError.style.display = "block";
    }
    console.log(data);
    console.log(logged_in);

}
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
    logout2();
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    console.log(data);
  }

  return (
    <Router>
      <div className="app">
          <Routes>
            <Route path='/' element={
              <Navigate to='/en' />
            } />
            <Route path='/en' element={
              <HomeEn logout={logout} userData={userData} logged_in={logged_in} toggleLogged={toggleLogged}/>
            } />
             
            <Route path='/en/login' element={ 
              <LoginEn loading={LoginLoading} userData={userData} login={login} logged_in={logged_in} toggleLogged={toggleLogged}/> 
            } />
            <Route path='/en/register' element={ 
              <RegisterEn userData={userData}/> 
            } />
            <Route path='/en/verify' element={ 
              <Verify userData={userData} vector={vector} header="Your email has been verified" message="Happy shoping" /> 
            } />
              <Route path={'/en/product/:id'} element={ 
              <ProductDetail logout={logout} userData={userData} logged_in={logged_in} toggleLogged={toggleLogged}/> 
            } />
            <Route path='/en/profile' element={<ProfileEN />}/>      
            <Route path="/ka" element={
              <HomeKa logout={logout} userData={userData} logged_in={logged_in} toggleLogged={toggleLogged}/>
            } />
            <Route path="/ka/login" element={
              <LoginKa loading={LoginLoading} userData={userData} login={login} logged_in={logged_in} toggleLogged={toggleLogged}/>
            } />
            <Route path="/ka/register" element={
              <RegisterKa userData={userData}/>
            } />
            <Route path={'en/kiushop/verify/:email/:token'} element={<Verify />}/>
            <Route path='en/addproduct'  element/>
          </Routes>  
      </div>

    </Router>
  );
}

export default App;
