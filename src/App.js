import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { useState } from 'react';
import HomeEn from './components/HomeEn.js';
import LoginEn from './components/LoginEn.js';
import RegisterEn from './components/RegisterEn.js';
import Verify from './components/Verify.js';
import server from './components/ServerURL.js';
import ProfileEN from './ProfileEN.js';

const App = () => {
  const [logged_in, set_logged_in] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    name: "",
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

    console.log(log);
    const link = server + 'login';
    const response = await fetch(link, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(log)
    });
    const data = await response.json();
    if(response.status === 200 && logged_in !== true) {
      toggleLogged();
      setUserData(data.user);
      nav("/en");
    }
    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("refresh_token", data.refresh_token);

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
    const data = await response.json();
    logout2();
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
              <LoginEn userData={userData} login={login} logged_in={logged_in} toggleLogged={toggleLogged}/> 
            } />
            <Route path='/en/register' element={ 
              <RegisterEn userData={userData}/> 
            } />
            <Route path='/en/profile' element={<ProfileEN />}/>      
            <Route path="/ka" element={
              <HomeEn />
            } />

            <Route path={'en/kiushop/verify/:email/:token'} element={<Verify />}/>
          </Routes>  
      </div>

    </Router>
  );
}

export default App;
